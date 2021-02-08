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
                                <!-- <i class="el-icon-user-solid"></i> -->
                                {{ (node || {}).label }}
                                </span>
                            </span>
                        </avue-tree>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card class="box-card">
                        <avue-form :option="formOption" v-model="formData" @submit="submit"></avue-form>
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
    import {getPage, getObj, addObj, putObj, delObj} from '@/api/orgc/deptinfo'
    import {tableOption} from './deptinfo'

    export default {
        name: 'deptinfo',
        data() {
            return {
                treeForm:{},
                searchData: {},
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
                    filter: false,
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
                },
                formData:{
                    name:'张三',
                    code: 'code',
                    alias: '部门简称',
                    description: '节点描述',
                    type: '2',
                    rstate: '1',
                },
                formOption: {
                    labelWidth: 120,
                    column: [
                        {
                            label: '部门节点名称',
                            prop: 'name',
                        },{
                            label: '部门节点代码',
                            prop: 'code'
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
                        }, {
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
                            label: '部门节点描述',
                            prop: 'description',
                            type: 'textarea',
                            span: 24,
                            minRows: 3,
                            maxlength: 200,
                        }
                    ]
                },
                searchOption: {
                    menuSpan:8,
                    menuPosition: 'right',
                    emptyBtn:false,
                    submitBtn:false,
                    column: [
                    {
                        label: '组织名称',
                        prop: 'zuzhi',
                        type: 'select',
                        span: 8,    
                        dicData: [
                            {
                                label: '组织名称',
                                value: "1",
                            },{
                                label: '组织名称2',
                                value: "0",
                            }],
                    },{
                        label: '版本名称',
                        prop: 'bamben',
                        type: 'select',
                        span: 8,    
                        dicData: [
                            {
                                label: '版本名称1',
                                value: "1"
                            },{
                                label: '版本名称2',
                                value: "0"
                            }]
                    }]
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
					addBtn: this.vaildData(this.permissions.orgc_deptinfo_add, false),
                    delBtn: this.vaildData(this.permissions.orgc_deptinfo_del, false),
                    editBtn: this.vaildData(this.permissions.orgc_deptinfo_edit, false),
                    viewBtn: this.vaildData(this.permissions.orgc_deptinfo_get, false)
                };
            }
        },
        methods: {
            nodeClick(data){
                this.$message.success(JSON.stringify(data))
            },
            submit() {
                console.log(this.formData)
            },
            handleSearch(){
                console.log(this.searchData)
            },
            handleEmpty(){
                this.$refs.searchForm.resetForm();
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
