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
                            :before-open="beforeOpen"
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
                        >
                            <template slot-scope="scope" slot="menuLeft">
                                <el-button style="float: left;" type="primary" icon="el-icon-plus" size="small" @click.stop="handleAdd(scope.row,scope.index)">新增</el-button>
                            </template>
                        	<template slot-scope="scope" slot="menu">
                                <el-button class="el-icon-edit" size="small" type="text" @click="handleEdit(scope.row,scope.index)"> 编辑</el-button>
                                <el-button type="text" icon="el-icon-document-add" size="mini" @click="handleCopy(scope.row,scope.index)">复制</el-button>
                                <el-button v-if="scope.row.status == 0" type="text" icon="el-icon-document-add" size="mini" @click="handlePublish(scope.row,scope.index)">发布</el-button>
                                <el-button v-if="scope.row.status != 100" type="text" icon="el-icon-delete" size="mini" @click="handleDel(scope.row,scope.index)">删除</el-button>
                                <el-button type="text"
                                        icon="el-icon-s-claim"
                                        size="mini"
                                        @click="handleTree(scope.row,scope.index)">当前组织结构树
                                </el-button>
                            </template>
                        </avue-crud>
                    </el-card>
                </el-col>
                <el-col :span="8" v-show="isShowOrg">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <h3><i class="el-icon-document-copy"></i> 组织结构</h3>
                                <el-button class="close-tree-box" type="text" @click="handleTree()">
                                    <el-tooltip content="关闭" placement="top">
                                        <i class="el-icon-close"></i>
                                    </el-tooltip>
                                </el-button>
                        </div>
                        <el-button v-if="isShowAdd" type="primary" class="el-icon-plus" size="small" @click="addBranch()"> 新 增</el-button>
                        <avue-tree :loading="treeLoading" :option="treeOption" :data="treeData" v-model="treeForm">
                            <span class="el-tree-node__label" slot-scope="{ node, data }">
                                <span>
                                <i> {{data.code}} - </i>
                                {{ (node || {}).label }}
                                </span>
                            </span>
                            <template slot-scope="{ node, data }" slot="menu">
                                <div class="avue-tree__item" @click="addBranch(node,data)">新增</div>
                                <div class="avue-tree__item" @click="editBranch(node,data)">修改</div>
                                <div class="avue-tree__item" @click="delBranch(node,data)">删除</div>
                            </template>
                        </avue-tree>
                    </el-card>
                </el-col>
            </el-row>
        </basic-container>
        <el-dialog :title="branchTitle"
            :visible.sync="dialogVisible"
            width="50%">
            <avue-form ref="form" v-model="branchData" :option="branchOption">
                <template slot="menuForm">
                    <el-button icon="el-icon-check" type="primary" @click="save">
                        <span>{{branchType == 'add'? '新 增': '编 辑'}}</span>
                    </el-button>
                    <el-button icon="el-icon-delete" @click="handleEmpty">清 空</el-button>
                </template>
            </avue-form>
        </el-dialog>   
    </div>
</template>

<script>
    /**
     * 组织机构维护
     */
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj, getTree, addTree,editTree,deleteTree, publishOrg, orgNameUniq, deptNameUniq} from '@/api/orgc/orginfo'
    import {tableOption} from './orginfo'

    export default {
        name: 'orginfo',
        data() {
            return {
                isShowOrg: false,
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
                treeForm:{},
                treeData:[],
                treeLoading: true,
                treeOption:{
                    title:'新增组织结构',
                    filterText:"搜索关键字自定义",
                    defaultExpandAll:true,
                    filter: false,
                    addBtn: false,
                    editBtn: false,
                    delBtn: false,
                    formOption:{
                        labelWidth:110,
                        column:[{
                            label:'组织结构代码',
                            prop:'code',
                            rules: [{
                                required: true,
                                validator: this.validateOrgCode,
                                trigger: 'blur'
                            }],
                        }],
                    },
                    props:{
                        labelText:'节点名称',
                        label:'nodeName',
                        value:'nodeId',
                        children:'children',
                    },
                },
                versionData: {},
                dialogVisible: false,
                parentData: {},
                branchData: {},
                branchTitle: '',
                editParams: {},
                isShowAdd: false,
                branchType: 'add',
                branchOption:{
                    emptyBtn:false,
                    submitBtn:false,
                    column: [{
                        label: "节点名称",
                        labelWidth: 110,
                        prop: "nodeName",
                        rules: [{
                            required: true,
                            validator: this.validateDeptName,
                            trigger: "blur"
                        }]
                    },{
                        label: "部门结构代码",
                        labelWidth: 110,
                        prop: "code",
                        rules: [{
                            required: true,
                            validator: this.validateDeptCodeName,
                            trigger: "blur"
                        }]
                    },{
                        label: "顺序",
                        labelWidth: 110,
                        prop: "seq",
                        rules: [{
                            required: true,
                            message: '请输入顺序号',
                            trigger: "blur"
                        }]
                    }]
                }
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
					addBtn: this.vaildData(this.permissions.orgc_ebs_add, false),
                    delBtn: this.vaildData(this.permissions.orgc_ebs_del, false),
                    editBtn: this.vaildData(this.permissions.orgc_ebs_edit, false),
                    viewBtn: this.vaildData(this.permissions.orgc_ebs_get, false)
                };
            }
        },
        methods: {
            beforeOpen(done){
                let orgName = this.findObject(this.tableOption.column, 'orgName');
                let orgCode = this.findObject(this.tableOption.column, 'orgCode');
                orgName.rules = [{required: true, validator: this.validateOrgName, trigger: 'blur'}]
                orgCode.rules = [{required: true, validator: this.validateOrgCode, trigger: 'blur'}]
                done();
            },
            /**校验组织机构名称是否唯一 */
            validateOrgName(rule, value, callback){
                let data ={name: value}
                if (!value) {
                    callback(new Error('请输入组织机构名称'));
                } else {
                    orgNameUniq(data).then(res=>{
                       if(res.data.data && res.data.data.length > 0){
                            callback(new Error('组织机构名称不能重复'));
                       }else{
                           callback();
                       }
                   })
                }
            },
            /**校验组织机构代码是否唯一 */
            validateOrgCode(rule, value, callback){
                let data ={code: value}
                if (!value) {
                    callback(new Error('请输入组织机构代码'));
                } else {
                    orgNameUniq(data).then(res=>{
                       if(res.data.data && res.data.data.length > 0){
                            callback(new Error('组织机构代码不能重复'));
                       }else{
                           callback();
                       }
                   })
                }
            },
            /**校验部门节点名称是否唯一 */
            validateDeptName(rule, value, callback){
                let data ={name: value,versionId: this.versionData.verSionId}
                if (!value) {
                    callback(new Error('请输入节点名称'));
                } else {
                    deptNameUniq(data).then(res=>{
                       if(res.data.data){
                            callback(new Error('节点名称不能重复'));
                       }else{
                           callback();
                       }
                   })
                }
            },
             /**校验部门节点code是否唯一 */
            validateDeptCodeName(rule, value, callback){
                let data ={code: value,versionId: this.versionData.verSionId}
                if (!value) {
                    callback(new Error('请输入部门节点代码'));
                } else {
                    deptNameUniq(data).then(res=>{
                       if(res.data.data){
                            callback(new Error('部门节点代码不能重复'));
                       }else{
                           callback();
                       }
                   })
                }
            },
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
                // row.id = new Date().getTime();
                // row.orgId = new Date().getTime();
                // row.verSionId = new Date().getTime() + 1;
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
             * @title 版本列表数据更新
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
                    return delObj(row.verSionId)
                }).then(data => {
                    _this.$message({
                        showClose: true,
                        message: '删除成功',
                        type: 'success'
                    })
                    this.isShowOrg = false;
                    this.getPage(this.page);
                }).catch(function (err) {
                })
            },
            /**
             * 新增
             */
            handleAdd(row,index){
                this.handleIsEdit(this.tableOption.column,false);
                this.$refs.crud.rowAdd(row,index);
            },
            /**
             * 编辑
             */
            handleEdit(row,index){
                this.handleIsEdit(this.tableOption.column,true);
                this.$refs.crud.rowEdit(row,index);
            },
            /**
             * 控制表单项的禁启用
             */
            handleIsEdit(data,type){
                data.forEach(item=>{
                    if(item.prop == 'orgName' || item.prop == 'orgCode'){
                        item.disabled = type;
                    }
                })
            },
            /** 发布 */
            handlePublish(row,index){
                let data = {
                    orgId: row.orgId,
                    versionCode: row.versionCode,
                    versionName: row.versionName,
                    effectiveDate: row.effectiveDate,
                    expiringDate: row.expiringDate,
                    status: row.status,
                    id: row.verSionId,
                }
                publishOrg(data).then(res => {
                    this.$message.success('发布成功');
                    this.getPage(this.page);
                })
            },
            /** 复制 */
            handleCopy(row,index){
                this.handleIsEdit(this.tableOption.column, true);
                let data = {
                    alias: row.alias,
                    effectiveDate: row.effectiveDate,
                    expiringDate: row.expiringDate,
                    orgCode: row.orgCode,
                    orgId: row.orgId,
                    orgName: row.orgName,
                    status: 0,
                    verSionId: null,
                    versionCode: null,
                    versionName: null,
                }
                this.$refs.crud.rowCopy(data,index);
            },
            /**
             * 结构树展示与否
             */
            handleTree: function (row) {
                this.treeLoading = true;
                this.parentData = {};
                if(row){
                    this.isShowOrg = true;
                    this.versionData = row;
                    let data = {
                        id: row.verSionId,
                    }
                    this.getTree(data);
                }else{
                    this.isShowOrg = false
                }
            },
            /**
             * 获取结构树数据
             */
            getTree(data){
                getTree(data).then(res =>{
                    this.treeData = res.data.data;
                    this.treeLoading = false;
                    if(this.treeData && this.treeData.length > 0){
                        this.isShowAdd = false;
                    } else {
                        this.isShowAdd = true;
                    }
                });
            },
            tip(node,data){
                this.$message.success(JSON.stringify(data))
            },
            /** 节点新增 */
            addBranch(node,data){
                this.branchType = 'add';
                this.branchData = {
                    nodeName: null,
                    code: null,
                    seq: null,
                }
                if(node){
                    this.branchTitle = node.nodeName;
                    this.parentData = node;
                }else{
                    this.branchTitle = '新增';
                }
                this.dialogVisible = true;
                setTimeout(() => {
                    this.handleEmpty();
                }, 200);
            },
            /**
             * 修改
             */
            editBranch(node){
                this.branchType = 'edit';
                this.branchData = {
                    nodeName: node.nodeName,
                    code: node.code,
                    seq: node.seq,
                }
                this.editParams = node;
                this.dialogVisible = true;
            },
            /**
             * 删除节点
             */
            delBranch(node){
                this.$confirm('此操作将永久该节点, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteTree(node.nodeId).then(res =>{
                        this.$message.success('删除成功');
                        this.parentData = {};
                        this.getTree({id: this.versionData.verSionId});
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },
            /**
             * 新增节点
             */
            save(data,done){
                console.log(this.parentData)
                this.$refs.form.validate((vaild,done)=>{
                    if(vaild){
                        this.treeForm.id = new Date().getTime();
                        this.treeForm.value=new Date().getTime();
                        this.treeForm.children=[];
                        if(this.branchType === 'add'){
                            let paramsData = {
                                pid: this.parentData.nodeId || -1,
                                nodeId: '',
                                nodeName: this.branchData.nodeName,
                                code: this.branchData.code,
                                nodeInfo: {
                                    tenantId: null,
                                    orgId: this.versionData.orgId,
                                    versionId: this.versionData.verSionId,
                                    deptId: null,
                                    name: this.branchData.nodeName,
                                    code: this.branchData.code,
                                    alias: null,
                                    description: null,
                                    type: null,
                                    parentId:  this.parentData.nodeId || -1,
                                    level: null,
                                    seq: this.branchData.seq,
                                },
                                children: [],
                            }
                            addTree(paramsData).then(res =>{
                                this.$message.success('新增成功');
                                this.getTree({id:this.versionData.verSionId});
                                this.dialogVisible = false;
                                this.branchData = {
                                    nodeName: null,
                                    code: null,
                                    seq: null,
                                }
                                this.handleEmpty();
                            });
                        }else{
                            this.editParams.nodeName = this.branchData.nodeName;
                            this.editParams.code = this.branchData.code;
                            this.editParams.seq = this.branchData.seq;
                            this.editParams.nodeInfo.name = this.branchData.nodeName;
                            this.editParams.nodeInfo.code = this.branchData.code;
                            editTree(this.editParams).then(res =>{
                                this.$message.success('修改成功');
                                this.getTree({id:this.versionData.verSionId});
                                this.dialogVisible = false;
                                this.branchData = {
                                    nodeName: null,
                                    code: null,
                                    seq: null,
                                }
                                this.handleEmpty();
                            })
                        }
                        setTimeout(()=>{
                            done()
                        },1000)
                    }
                })
            },
            /**
             * 清空节点表单
             */
            handleEmpty(){
                this.$refs.form.resetForm();
            }
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
