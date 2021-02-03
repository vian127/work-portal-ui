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
                <template slot-scope="scope" slot="menuLeft">
                    <el-button type="primary"
                    icon="el-icon-plus"
                    size="small"
                    plain
                    v-if="permissions.tntm_app_add"
                    @click.stop="showAddForm(scope.row, scope.index)">新增</el-button>
                </template>

				<template slot="tplMode" slot-scope="scope" >
				  <!-- <el-tag size="mini" effect="light" :type="scope.row.tplMode == 'OP' ? '' : scope.row.tplMode == 'MA' ? 'primary' : 'danger'"> -->
				  <el-tag size="mini" effect="light" :type="scope.row.tplMode == 'MA' ? 'danger' : 'primary'">
					{{scope.row.$tplMode}}
				  </el-tag>
				</template>
				
				<template slot-scope="scope" slot="rstate">
					<el-switch
							v-model="scope.row.rstate"
							active-value="1"
							inactive-value="0"
							active-color="#13ce66"
							inactive-color="#ff4949"
							@change="changeEnable(scope.row)">
					</el-switch>
				</template>
			
            </avue-crud>
            <el-dialog
                title="新增"
                :visible.sync="dialogVisible"
                width="80%">
                <select-saas-app 
                    :currTid="this.currTid"
                    @afterAddApp="afterAddApp"
                >
                </select-saas-app>
            </el-dialog>

        </basic-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getPage, getObj, putObj, delObj} from '@/api/tntm/tenantapp'
    import {tableOption} from './tenantapp'

    import SelectSaasApp from './select-saas-app.vue'

    export default {
        name: 'tenantapp',

        components: {
            SelectSaasApp,
        },

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

                dialogVisible: false,
                currTid: '',
                afterAddAppStatus: '',
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
					addBtn: this.vaildData(this.permissions.tntm_app_add, false),
                    delBtn: this.vaildData(this.permissions.tntm_app_del, false),
                    editBtn: this.vaildData(this.permissions.tntm_app_edit, false),
                    viewBtn: this.vaildData(this.permissions.tntm_app_get, false)
                };
            }
        },
        methods: {
            /**
             * 获取列表(分页)数据
             */
            getPage(page, params) {
                this.tableLoading = true
                getPage(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize,
                    descs: this.page.descs,
                    ascs: this.page.ascs,
                }, params, this.paramsSearch)).then(response => {
                    this.tableData = response.data.data.records
                    this.page.total = response.data.data.total
                    this.page.currentPage = page.currentPage
                    this.page.pageSize = page.pageSize
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
                if(row.tplMode == "MA"){
                    _this.$message({
                        showClose: true,
                        message: '必装应用，不允许删除！',
                        type: 'error'
                    })
                   
                    return;
                }
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
             * @title 新增租户应用
             *
             **/
			handleAdd(){
				putObj({
					id: row.id,
					rstate: row.rstate
				}).then(data => {

				})
			},

            /**
             * @title 状态变更
             * @param row 为当前的数据
             *
             **/
			changeEnable(row){
				putObj({
					id: row.id,
					rstate: row.rstate
				}).then(data => {

				})
			},

            /**
             * @title 显示新增弹窗
             *
             **/
			showAddForm(){
                this.dialogVisible = true
            },
            
            /**
             * @title 新增应用成功后的回调函数
             *
             **/
            afterAddApp(addStatus){
                this.afterAddAppStatus = addStatus
                console.debug("afterAddAppStatus:" + this.afterAddAppStatus)
                if(this.afterAddAppStatus == "OK"){
                    this.dialogVisible = false
                    this.getPage(this.page)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
