<!--
  - Copyright (C) 2020
  - All rights reserved, Designed By AiCoder.
-->
<template>
	<div class="execution">
		<basic-container>
			<avue-crud 
				ref="crud"
				v-model="form"
                :option="tableOption"
				:data="tableData"
                :permission="permissionList"
				:page="page"
                :table-loading="tableLoading"
                @on-load="getPage"
				@search-change="searchChange"
                @sort-change="sortChange"
                @refresh-change="refreshChange"
                @row-save="handleSave"
                @row-update="handleUpdate"
                @row-del="handleDel"
			>
				<template slot="menu" slot-scope="scope">
					<el-button 
						type="text"
						icon="el-icon-plus"
						size="small"
						plain
						v-if="permissions.tntm_orginfo_add"
						@click="addChild(scope.row,scope.index)">添加下级</el-button>
				</template>
				
 				<template slot-scope="scope" slot="rstate">
					<el-switch
						v-model="scope.row.rstate"
						active-value="1"
						inactive-value="0"
						active-color="#13ce66"
						inactive-color="#ff4949"
						@change="changeEnable(scope.row,scope.index)">
					</el-switch>
				</template>
           </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getAllTree, getTree, getObj, addObj, putObj, delObj} from '@/api/tntm/orginfo'
    import {tableOption} from './orginfo'

    export default {
        name: 'orginfo',
        data() {
            return {
                form: {},
                tableData: [],
                tableOption: tableOption,
				page: {
                    total: 0, // 总页数
                    currentPage: 1, // 当前页数
                    pageSize: 20, // 每页显示多少条
                    ascs: [],//升序字段
                    descs: []//降序字段
                },
                paramsSearch: {},
                tableLoading: false,
            }
        },
		
        created() {
        },
        mounted: function () {
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
					addBtn: this.vaildData(this.permissions.tntm_orginfo_add, false),
                    delBtn: this.vaildData(this.permissions.tntm_orginfo_del, false),
                    editBtn: this.vaildData(this.permissions.tntm_orginfo_edit, false),
                    viewBtn: this.vaildData(this.permissions.tntm_orginfo_get, false)
                };
            }
        },
        methods: {
            /**
             * 获取列表(分页)数据
             */
            getPage(page, params) {
                this.tableLoading = true
                getAllTree(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize,
                    descs: this.page.descs,
                    ascs: this.page.ascs,
                }, params, this.paramsSearch)).then(response => {
                    this.tableData = response.data.data
					this.$refs.crud.DIC.parentId = this.tableData
                    this.tableLoading = false
                }).catch(() => {
                    this.tableLoading = false
                })
            },
            /**
             * 筛选条件变更处理
             */
            searchChange(params,done) {
                params = this.filterForm(params)
                this.paramsSearch = params
                this.page.currentPage = 1
                this.getPage(this.page, params)
                done()
            },
            /**
             * 排序栏位变更处理
             */
            sortChange(val) {
                let prop = val.prop ? val.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : ''
                if (val.order == 'ascending') {
                    this.page.descs = []
                    this.page.ascs = prop
                } else if (val.order == 'descending') {
                    this.page.ascs = []
                    this.page.descs = prop
                } else {
                    this.page.ascs = []
                    this.page.descs = []
                }
                this.getPage(this.page)
            },
            /**
             * 刷新回调
             */
            refreshChange(page) {
                this.getPage(page)
            },
			
            /**
             * @title 数据添加
             * @param row 为当前的数据
             * @param done 为表单关闭函数
             *
             **/
            handleSave: function (row, done, loading) {
                addObj(row).then(response => {
                    this.$message({
                        showClose: true,
                        message: '添加成功',
                        type: 'success'
                    })
                    done()
                    this.getPage(this.page)
                }).catch(() => {
                    loading()
                })
            },
			
            /**
             * @title 数据更新
             * @param row 为当前的数据
             * @param index 为当前更新数据的行数
             * @param done 为表单关闭函数
             *
             **/
            handleUpdate: function (row, index, done, loading) {
                putObj(row).then(response => {
                    this.$message({
                        showClose: true,
                        message: '修改成功',
                        type: 'success'
                    })
                    done()
                    this.getPage(this.page)
                }).catch(() => {
                    loading()
                })
            },
			
            /**
             * @title 数据删除
             * @param row 为当前的数据
             * @param index 为当前删除数据的行数
             *
             **/
            handleDel: function (row, index) {
                var _this = this
                if(row.parentId === "-1"){
                    _this.$notify({
                        showClose: true,
                        title: "失败",
                        message: '组织机构根节点不能删除！',
                        type: 'error',
                        duration: 2000
                    })
                    return;
                };
                this.$confirm('是否确认删除此数据', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    return delObj(row.id)
                }).then(data => {
                    _this.$message({
                        showClose: true,
                        message: '删除成功',
                        type: 'success'
                    })
                    this.getPage(this.page)
                }).catch(function (err) {
                })
            },
			
            /**
             * @title 变更记录状态
             * @param row 为当前的数据
             * @param index 为当前数据的行号
             *
             **/
            changeEnable(row, index){
                var _this = this
				// if(row.tplMode == "MA" && row.rstate == "0"){
                //    _this.$message({
                //         showClose: true,
                //         message: '该角色必须存在，不能失效！',
                //         type: 'error'
                //     })
				// 	row.rstate = "1"
				// }
                putObj({
                    id: row.id,
                    rstate: row.rstate
                }).then(data => {

                })
            },
			
           /**
             * @title 添加下级机构
             * @param row 为当前的数据
             * @param index 为当前数据的行号
             *
             **/
			addChild(row, index){
				this.form.parentId = row.id
				this.$refs.crud.rowAdd()
			}

        }
    }
</script>

<style lang="scss" scoped>
</style>
