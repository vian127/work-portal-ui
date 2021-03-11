<!--
  - Copyright (C) 2020
  - All rights reserved, Designed By AiCoder.
  - date 2021-01-28 14:42:49
-->
<template>
	<div class="execution">
		<basic-container>
            <div>
                <avue-form ref="searchForm" :option="searchOption" v-model="searchData">
                    <template slot="menuForm">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button @click="handleEmpty">清 空</el-button>
                    </template>
                </avue-form>
            </div>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <h3><i class="el-icon-document-copy"></i> 组织结构</h3>
                        </div>
                        <avue-tree :loading="treeLoading" :option="treeOption" :data="treeData" @node-click="nodeClick" v-model="treeForm">
                            <span class="el-tree-node__label" slot-scope="{ node, data }">
                                <span>
                                <i>{{data.code}} - </i>
                                {{ (node || {}).label }}
                                </span>
                            </span>
                        </avue-tree>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card class="box-card">
                        <avue-form ref='deptForm' :option="formOption" v-model="formData" @submit="submit">
                            <!-- 部门干系人 -->
                            <template slot="takeholder">
                                <deptStakeholder @getDeptStakeholder="getDeptStakeholder" :isEdit="isEdit" :deptStakeholderList="deptStakeholderList"></deptStakeholder>
                            </template>
                        </avue-form>
                        <div class="btn-box" style="width: 100%;text-align: center;">
                            <el-button size="small" type="primary" v-if="isEdit" @click="handleEdit">编辑</el-button>
                        </div>
                    </el-card>
                    
                </el-col>
            </el-row>
        </basic-container>
    </div>
</template>

<script>
    /**
     * 部门信息维护
     */
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj, getTree, editNodeInfo} from '@/api/orgc/deptinfo'
    import {tableOption} from './deptinfo'
    import deptStakeholder from '../../../components/orgc/deptStakeholder/deptStakeholder'
    export default {
        name: 'deptinfo',
        components: {
            deptStakeholder,
        },
        data() {
            return {
                treeForm:{},
                searchData: {},
                treeLoading:false,
                treeData:[],
                isEdit: false,
                tenantId: '',
                treeOption:{
                    title:'新增组织结构',
                    filterText:"搜索关键字自定义",
                    defaultExpandAll:true,
                    filter: false,
                    menu: false,
                    formOption:{
                        labelWidth:100,
                    },
                    props:{
                        labelText:'节点名称',
                        label:'nodeName',
                        value:'nodeId',
                        children:'children'
                    }
                },
                formData:{},
                nodeData: {},
                formOption: {
                    labelWidth: 120,
                    detail:true,
                    group:[{
                        icon:'el-icon-info',
                        label: '基本信息',
                        prop: 'group1',
                        column: [
                            {
                                label: '部门节点名称',
                                prop: 'name',
                                disabled: true,
                            },{
                                label: '部门节点代码',
                                prop: 'code',
                                disabled: true,
                            },{
                                label: '部门节点简称',
                                prop: 'alias'
                            },{
                                label: '部门节点类型',
                                prop: 'type',
                                type: "select",
                                dicData: [
                                    {
                                        label: '执行长部门',
                                        value: "1"
                                    },{
                                        label: '事业处/总处/分公司部门',
                                        value: "2"
                                    },{
                                        label: '处级部门',
                                        value: "3"
                                    },{
                                        label: '部级部门',
                                        value: "4"
                                    },{
                                        label: '课级部门',
                                        value: "5"
                                    }]
                            },{
                                label: '区域代码',
                                prop: 'areaCode'
                            },{
                                label: '行政区号',
                                prop: 'regionCode'
                            },{
                                label: '地址',
                                prop: 'address'
                            }, {
                                label: '地址-省',
                                prop: 'province',
                                type: 'select',
                                props: {
                                    label: 'regionName',
                                    value: 'regionCode'
                                },
                                cascaderItem: ['city', 'district'],
                                dicUrl: '/sys/region/listProvince',
                            },
                            {
                                label: '地址-市',
                                prop: 'city',
                                type: 'select',
                                props: {
                                    label: 'regionName',
                                    value: 'regionCode'
                                },
                                dicUrl: '/sys/region/listCity/{{key}}',
                            },
                            {
                                label: '地址-区',
                                prop: 'district',
                                type: 'select',
                                props: {
                                    label: 'regionName',
                                    value: 'regionCode'
                                },
                                dicUrl: '/sys/region/listDistrict/{{key}}',
                            },{
                                label: '利润中心',
                                prop: 'profitCenter'
                            },{
                                label: '薪资成本中心',
                                prop: 'salaryCostCenter'
                            },{
                                label: '是否为直接人力',
                                prop: 'isDirect',
                                type: "radio",
                                dicData: [
                                    {
                                        label: '是',
                                        value: '1'
                                    },
                                    {
                                        label: '否',
                                        value: '0'
                                    }
                                ]
                            },{
                                label: '记录状态',
                                prop: 'rstate',
                                type: 'select',
                                dicData: [
                                    {
                                        label: '已生效',
                                        value: "1"
                                    },{
                                        label: '已失效',
                                        value: "0"
                                    }]
                            },{
                                label: '备注',
                                prop: 'remark',
                                type: 'textarea',
                                span: 24,
                                minRows: 2,
                                maxlength: 200,
                            },
                            {
                                label: '部门节点描述',
                                prop: 'description',
                                type: 'textarea',
                                span: 24,
                                minRows: 2,
                                maxlength: 200,
                            }
                        ]
                    },{
                        icon:'el-icon-info',
                        label: '部门干系人',
                        prop: 'group2',
                        column:[{
                            labelWidth:0,
                            label: '',
                            prop: 'takeholder',
                            span:24,
                            hide:false,
                            formslot:true,
                        }],
                        display: true,    
                    }],
                },
                searchOption: {
                    menuSpan:8,
                    menuPosition: 'right',
                    emptyBtn:false,
                    submitBtn:false,
                    column: [
                    {
                        label: '组织名称',
                        prop: 'orgName',
                        type: 'select',
                        span: 8,    
                        dicUrl: '/orgc/orginfo/list',
                        dicMethod: 'get',
                        props: {
                            label: 'name',
                            value: 'id'
                        },
                        cascaderItem: ['orgVersion'],
                        change: ({value,column}) => {
                            this.treeData = [];
                            this.$refs.deptForm.resetForm();
                            this.formOption.detail = true;
                        },
                    },{
                        label: '版本名称',
                        prop: 'orgVersion',
                        type: 'select',
                        span: 8,    
                        dicUrl: '/orgc/orgversion/list?orgId={{orgName}}',
                        props: {
                            label: 'versionName',
                            value: 'id'
                        },
                        change: ({value,column}) => {
                            this.treeData = [];
                            this.$refs.deptForm.resetForm();
                            this.formOption.detail = true;
                        },
                    }]
                },
                deptStakeholderData:[],
                deptStakeholderList: [], // 部门干系人回显数据
            }
        },
		
        created() {
            /**通过tenantId来控制部门信息是否可编辑 */
            this.tenantId = this.userInfo.tenantId;
        },
        mounted: function () {
            setTimeout(()=>{
                this.treeLoading=false;
            },2000)
        },
        computed: {
            ...mapGetters(['permissions','userInfo']),
            permissionList() {
                return {
					addBtn: this.vaildData(this.permissions.orgc_tntebs_add, false),
                    delBtn: this.vaildData(this.permissions.orgc_tntebs_del, false),
                    editBtn: this.vaildData(this.permissions.orgc_tntebs_edit, false),
                    viewBtn: this.vaildData(this.permissions.orgc_tntebs_get, false)
                };
            }
        },
        methods: {
            nodeClick(data){
                this.deptLoading = true;
                /** 节点信息 */
                this.nodeData = data;
                /**通过tenantId来控制部门信息是否可查看和编辑 */
                console.log(data.nodeInfo.tenantId,this.tenantId);
                if(data.nodeInfo.tenantId === this.tenantId){
                    /**部门信息 */
                    getObj(data.nodeInfo.deptId).then(res=>{
                        this.formData = res.data.data.deptInfo;
                        this.deptStakeholderList = res.data.data.deptStakeholderList;
                    });
                    this.formOption.detail = true;
                    this.isEdit = true; 
                } else {
                    this.$message.warning('该租户没有查看此权限');
                }
            },
             /**
             * 获取部门干系人
             */
            getDeptStakeholder(data){
                let resultData = data.map(item=>({
                    ...item,
                    deptId: this.formData.id,
                    deptCode: this.formData.code,
                    tenantId: this.formData.tenantId,
                }))
                this.deptStakeholderData = resultData;
            },
            submit(form,done) {
                let data = {
                    deptInfo: this.formData,
                    deptStakeholderList: this.deptStakeholderData,
                }
                putObj(this.formData).then(res=>{
                    this.$message.success('编辑成功');
                });
                let nodeData = this.nodeData;
                let deptData = this.formData;
                let paramsData = {
                    pid: nodeData.pid,
                    nodeId: nodeData.nodeId,
                    nodeName: deptData.name,
                    nodeInfo: {
                        tenantId: deptData.tenantId,
                        orgId: nodeData.nodeInfo.orgId,
                        versionId: nodeData.nodeInfo.versionId,
                        deptId: nodeData.nodeInfo.deptId,
                        name: deptData.name,
                        code: deptData.code,
                        alias: deptData.alias,
                        description: deptData.description,
                        type: deptData.type,
                        parentId: nodeData.nodeInfo.parentId,
                        level: nodeData.nodeInfo.level,
                        seq: nodeData.nodeInfo.seq,
                        id: nodeData.nodeInfo.id,
                    },
                    children: nodeData.children,
                }
                editNodeInfo(paramsData).then(response =>{
                    this.getTree();
                })
                this.formOption.detail = true;
                this.isEdit = true;
                done();
            },
            handleSearch(){
                if(this.searchData.orgVersion){
                    this.getTree();
                }
            },
            handleEmpty(){
                this.$refs.searchForm.resetForm();
            },
            /**
             * 获取组织结构树
             */
            getTree(){
                this.treeLoading = true;
                getTree({id: this.searchData.orgVersion}).then(res =>{
                    this.treeData = res.data.data;
                    this.treeLoading = false;
                })
            },
            handleEdit(){
                this.formOption.detail = false;
                this.isEdit = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
