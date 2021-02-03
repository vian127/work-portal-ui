<!--
  - Copyright (C) 2020
  - All rights reserved, Designed By AiCoder.
  - date 2021-01-28 14:38:06
-->
<template>
	<div class="execution">
		<basic-container>
            <el-row :gutter="10">
                <el-col :span="isShowOrg ? 16: 24">
                    <el-card class="box-card">
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
                                <el-button type="text"
                                        icon="el-icon-s-claim"
                                        size="mini"
                                        plain
                                        @click="handleTree(scope.row,scope.index)">当前组织结构树
                                </el-button>
                            </template>
                        </avue-crud>
                    </el-card>
                </el-col>
                <el-col :span="8" v-if="isShowOrg">
                    <el-card class="box-card">
                         <div slot="header" class="clearfix">
                            <h3><i class="el-icon-document-copy"></i> 组织结构</h3>
                            
                                <el-button class="close-tree-box" type="text" @click="handleTree()">
                                    <el-tooltip content="关闭" placement="top">
                                    <i class="el-icon-close"></i>
                                     </el-tooltip>
                                </el-button>
                           
                            
                        </div>
                        <avue-tree :loading="treeLoading" :option="treeOption" :data="treeData" @update="update" @save="save" @del="del" v-model="treeForm">
                            <span class="el-tree-node__label" slot-scope="{ node, data }">
                                <span>
                                <!-- <i class="el-icon-user-solid"></i> -->
                                {{ (node || {}).label }}
                                </span>
                            </span>
                        </avue-tree>
                    </el-card>
                </el-col>
            </el-row>
        </basic-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj} from '@/api/orgc/orginfo'
    import {tableOption} from './orginfo'

    export default {
        name: 'orginfo',
        data() {
            return {
                isShowOrg: null,
                form: {},
                tableData: [
                    {
                        id: 1,
                        name: '组织机构',
                        code: 'qoq',
                        alias: '组织机构'
                    }
                ],
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
                treeForm:{},
                treeLoading:true,
                treeData:[
                    {
                        value:0,
                        label:'一级部门',
                        children:[
                            {
                                value:1,
                                label:'一级部门1',
                            },{
                                value:2,
                                label:'一级部门2',
                            }
                        ]
                    },{
                        value:3,
                        label:'二级部门',
                        children:[
                            {
                                value:4,
                                label:'二级部门1',
                            },{
                                value:5,
                                label:'二级部门2',
                            }
                        ]
                    }
                ],
                treeOption:{
                    title:'新增组织结构',
                    filterText:"搜索关键字自定义",
                    defaultExpandAll:true,
                    formOption:{
                        labelWidth:100,
                        column:[{
                            label:'自定义项',
                            prop:'test'
                        }],
                    },
                    props:{
                        labelText:'标题',
                        label:'label',
                        value:'value',
                        children:'children'
                    }
                }
            }
        },
		
        created() {
        },
        mounted: function () {
            setTimeout(()=>{
                this.treeLoading=false;
            },2000)
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
					addBtn: this.vaildData(this.permissions.orgc_ebs_add, false),
                    delBtn: this.vaildData(this.permissions.orgc_ebs_del, false),
                    editBtn: this.vaildData(this.permissions.orgc_ebs_edit, false),
                    viewBtn: this.vaildData(this.permissions.orgc_ebs_get, false)
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
            /**
             * 结构树展示与否
             */
            handleTree: function (row) {
                if(row){
                    this.isShowOrg = row
                    // this.page2.currentPage = 1
                    // this.getPage2(this.page2)
                }else{
                    this.isShowOrg = null
                }
            },
            tip(node,data){
                this.$message.success(JSON.stringify(data))
            },
            del(data,done){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message.success('删除回调')
                    done();
                }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消删除'
                    });          
                });
            },
            update(data,parent,done,loading){
                this.$message.success('更新回调')
                done();
            },
            save(data,parent,done,loading){
                this.$message.success('新增回调')
                this.treeForm.id = new Date().getTime();
                this.treeForm.value=new Date().getTime();
                this.treeForm.children=[];
                done();
            },
        }
    }
</script>

<style lang="scss" scoped>
    .close-tree-box{
       position: absolute;
       top: 10px;
       right: 10px;
       font-size: 20px;
       color: #ccc;
    }
</style>
