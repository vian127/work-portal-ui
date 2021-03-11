<!--
  - Copyright (C) 2020
  - All rights reserved, Designed By AiCoder.
  - date 2021-01-28 14:42:08
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
                <template slot-scope="scope" slot="menu">
                    <el-button size="small"  type="text" @click="handleRelevance(scope.row)"> 关联公司</el-button>
                </template>
                <template slot-scope="scope" slot="name">
                    <span>{{scope.row.tenantInfoDto.name}}</span>
                </template>
                <template slot-scope="scope" slot="alias">
                    <span>{{scope.row.tenantInfoDto.alias}}</span>
                </template>
            </avue-crud>
        </basic-container>
        <el-dialog title="关联公司"
               :visible.sync="dialogVisible"
               width="80%"
            >
            <relevanceCompany ref="relevanceCompany" :relevanceComIds="relevanceComIds" v-if="dialogVisible"></relevanceCompany>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                <el-button size="small" type="primary" @click="selectCompany()">确 定</el-button>
            </span>
        </el-dialog>   
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj, addCompanttenant} from '@/api/orgc/companttenant'
    import {tableOption} from './companttenant'
    import relevanceCompany from '../../../components/orgc/relevance-company/relevance-company'
    export default {
        name: 'companttenant',
        components:{
            relevanceCompany,
        },
        data() {
            return {
                form: {},
                tableData: [],
                tableOption: tableOption,
				page: {
                    ascs: [],//升序字段
                    descs: []//降序字段
                },
                paramsSearch: {},
                tableLoading: false,
                dialogVisible: false,
                companttenantData: {},
                relevanceComIds: [],
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
					addBtn: this.vaildData(this.permissions.orgc_comtnt_add, false),
                    delBtn: this.vaildData(this.permissions.orgc_comtnt_del, false),
                    editBtn: this.vaildData(this.permissions.orgc_comtnt_edit, false),
                    viewBtn: this.vaildData(this.permissions.orgc_comtnt_get, false)
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
                    descs: this.page.descs,
                    ascs: this.page.ascs,
                }, params, this.paramsSearch)).then(response => {
                    this.tableData = response.data.data;
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
                this.getPage(this.page)
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
            handleRelevance(row){
                this.companttenantData = row;
                // 查询关联公司
                getObj(row.tenantInfoDto.tenantId).then(res=>{
                   this.relevanceComIds = res.data.data.map(item=>item.companyId);
                });
                this.dialogVisible = true;
            },
            /**
             * 选择关联公司
             */
            selectCompany(){
                this.dialogVisible = false;
                let data = this.$refs.relevanceCompany.selectData;
                let params = data.map(item=>({
                    tenantId: this.companttenantData.tenantInfoDto.tenantId,
                    companyId: item.id,
                    seq:'',
                }));
                addCompanttenant(params).then(response=>{
                    this.$message.success('关联成功');
                    this.getPage(this.page)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
