<!--
 - Copyright (C) 2020
 - All rights reserved, Designed By AiCoder.

-->
<template>
    <div class="execution">
        <basic-container>
            <avue-crud ref="crud"
                       :page="page"
                       :data="tableData"
                       :permission="permissionList"
                       :table-loading="tableLoading"
                       :option="tableOption"
                       v-model="form"
                       @on-load="getPage"
                       @refresh-change="refreshChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="handleDel"
                       @sort-change="sortChange"
                       @search-change="searchChange">

                <template slot-scope="scope" slot="menu">
                    <el-button icon="el-icon-edit"
                               size="small"
                               type="text"
                               v-if="permissions.getnt_ouapply_edit && (scope.row.status == '' || scope.row.status == '待提交' || scope.row.status == '已驳回')"
                              @click="openEditView(scope.row,scope.index)">编辑
                    </el-button>
                    <el-button icon="el-icon-edit"
                               size="small"
                               type="text"
                               v-if="permissions.getnt_ouapply_del && (scope.row.status == '' || scope.row.status == '待提交' || scope.row.status == '已驳回')"
                              @click="openDelView(scope.row,scope.index)">删除
                    </el-button>
                     <el-button icon="el-icon-edit"
                               size="small"
                               type="text"
                               v-if="permissions.getnt_ouapply_appr && (scope.row.status == '已提交')"
                              @click="showApproveForm(scope.row,scope.index)">审核
                    </el-button>
                </template>

                <template slot-scope="scope" slot="menuForm">
                    <el-button type="primary"
                     icon="el-icon-check"
                     size="small"
                     plain
                     @click="handleTempSave(scope.row,scope.index)"
                    >暂存</el-button>
                </template>

                <template slot-scope="scope" slot="parentOuIdForm">
                    <el-tag>暂时没有内容{{scope}}</el-tag>
                </template>

            </avue-crud>
            <el-dialog
                title="审核"
                :visible.sync="visibleApproveDialog"
                width="80%">
                <avue-form :option="tableOption" v-model="approveForm" @submit="handleApprove"></avue-form>
            </el-dialog>
       </basic-container>
    </div>
</template>


<script>
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj, approveObj, tempSaveObj} from '@/api/getnt/ouapply'
    import {tableOption} from './ouapply'

    export default {
        name: 'ouapply',
        data() {
            return {
                form: {
                },
                tableData: [],
                page: {
                    total: 0, // 总页数
                    currentPage: 1, // 当前页数
                    pageSize: 20, // 每页显示多少条
                    ascs: [],//升序字段
                    descs: []//降序字段
                },
                paramsSearch: {},
                tableLoading: false,
                tableOption: tableOption,

                approveForm: {
                    // row: {},
                },
                visibleApproveDialog: false,
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
                    addBtn: this.vaildData(this.permissions.getnt_ouapply_add, false),
                    delBtn: this.vaildData(this.permissions.getnt_ouapply_del, false),
                    editBtn: this.vaildData(this.permissions.getnt_ouapply_edit, false),
                    viewBtn: this.vaildData(this.permissions.getnt_ouapply_get, false)
                };
            }
        },

        watch:{
            'approveForm.apprStatus'(){
                // var parentOuIdColumn = this.option.column['parentOuId'];

                if(this.approveForm.apprStatus == 200){
                    this.approveForm.status = '已审核'
                    // parentOuIdColumn.display=true
                }else{
                    if(this.approveForm.apprStatus == -100){
                        this.approveForm.status = '已驳回'
                    }
                    // parentOuIdColumn.display=false
                };
                
                // var column =this.option.column[1];
                // if(this.form.text1===0){
                //     column.display=true
                // }else{
                //     column.display=false
                // };
            },
        },

        methods: {
            searchChange(params,done) {
                params = this.filterForm(params)
                this.paramsSearch = params
                this.page.currentPage = 1
                this.getPage(this.page, params)
                done()
            },
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
            openEditView(row, index) {
  				this.$refs.crud.rowEdit(row, index)
            },
            openDelView(row, index) {
 				this.$refs.crud.rowDel(row, index)
            },
            showApproveForm(row, index, done) {
                this.approveForm = row
                this.approveForm.apprStatus = ""

                this.visibleApproveDialog = true
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
            /**
             * @title 数据更新
             * @param row 为当前的数据
             * @param index 为当前更新数据的行数
             * @param done 为表单关闭函数
             *
             **/
            handleUpdate: function (row, index, done, loading) {
                putObj(row).then(data => {
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
             * @title 数据添加
             * @param row 为当前的数据
             * @param done 为表单关闭函数
             *
             **/
            handleSave: function (row, done, loading) {
                addObj(row).then(data => {
                    this.$message({
                        showClose: true,
                        message: '添加成功',
                        type: 'success'
                    })
                    this.getPage(this.page)
                    done()
                }).catch(() => {
                    loading()
                })
            },

            /**
             * @title 数据添加
             * @param row 为当前的数据
             * @param done 为表单关闭函数
             *
             **/
            //handleTempSave: function (row, done, loading) {
            handleTempSave: function (row, done, loading) {
                let tmpRow = this.$refs.crud.tableForm

                console.log(tmpRow)
                tempSaveObj(tmpRow).then(data => {
                    this.$message({
                        showClose: true,
                        message: '暂存成功',
                        type: 'success'
                    })
                    this.getPage(this.page)
                    // 以下两句没有生效呢
                    this.$refs.crud.dialogForm.closeDialog()
                    this.$refs.crud.tableForm.hide()
                   //done()
                }).catch(() => {
                    //loading()
                    //done()
                })
            },

            //handleApprove: function (row, index, done, loading) {
            handleApprove: function (form, done) {
                let row = this.approveForm
                approveObj(row).then(data => {
                    this.$message({
                        showClose: true,
                        message: '审核执行成功',
                        type: 'success'
                    })
                    this.visibleApproveDialog = false
                    this.getPage(this.page)
                    done()
                }).catch(() => {
                    done()
               })
           },

           /**
             * 刷新回调
             */
            refreshChange(page) {
                this.getPage(page)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
