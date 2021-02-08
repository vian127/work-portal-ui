<!--
  - Copyright (C) 2020
  - All rights reserved, Designed By AiCoder.
  - date 2021-01-28 14:25:08
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
			>
             <template slot-scope="scope" slot="menuLeft">
                <el-button style="float: left;" type="primary" icon="el-icon-plus" size="small" @click.stop="handleAdd(scope.row,scope.index)">新增</el-button>
            </template>
                <template slot-scope="scope" slot="menu">
                    <el-button class="el-icon-view" size="small" type="text" @click="handleDetail(scope.row,scope.index)"> 查看</el-button>
                    <el-button class="el-icon-edit" size="small" type="text" @click="handleEdit(scope.row,scope.index)"> 编辑</el-button>
                    <el-button class="el-icon-delete" size="small" type="text" @click="handleDel(scope.row,scope.index)"> 删除</el-button>
                </template>
                <!-- 干系人 -->
                <template slot="takeholderForm" v-if="isShow">
                  <stakeholder :isShowView="isShowView" :stakeholderData="stakeholderData" :companyId="companyId" @getStakeholder="getStakeholder"></stakeholder>
                </template>
                <!-- 服务驻点 -->
                <template slot="stationForm" v-if="isShow">
                  <station :isShowView="isShowView" :companyId="companyId" @getStation="getStation"></station>
                </template>
                <!-- 公司关系 -->
                <!-- 暂时先隐藏 -->
                <template slot="companyRelationForm" v-if="false">
                  <companyRelation @getCompanyRelation="getCompanyRelation"></companyRelation>
                </template>
            </avue-crud>
              
        </basic-container>
    </div>
</template>

<script>
/**
 * 公司代码维护
 */
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj} from '@/api/orgc/companyinfo'
    import {tableOption} from './companyinfo'
    import stakeholder from '../../../components/orgc/stakeholder/stakeholeder'
    import station from '../../../components/orgc/station/station'
    import companyRelation from '../../../components/orgc/company-relation/company-relation'
    export default {
        name: 'companyinfo',
        components: {
            stakeholder,
            station,
            companyRelation
        },
        data() {
            return {
                form: {},
                companyId: null,
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
                companyRelation:[], // 公司关系
                station:[], // 服务驻点
                stakeholders:[], // 干系人
                stakeholderData: [], // 回显干系人
                isShow: false,
                isShowView: false,
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
					addBtn: this.vaildData(this.permissions.orgc_obs_add, false),
                    delBtn: this.vaildData(this.permissions.orgc_obs_del, false),
                    editBtn: this.vaildData(this.permissions.orgc_obs_edit, false),
                    viewBtn: this.vaildData(this.permissions.orgc_obs_get, false)
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
             * 新增
             */
            handleAdd(row,index){
                this.isShow = false;
                this.handleIsShow(this.isShow)
                this.$refs.crud.rowAdd(row,index);
            },
            /**
             * 获取详情
             */
            handleDetail(row,index){
                this.showDetail(row, index,'view');
            },
             /**
             * 编辑
             */
            handleEdit(row,index){
                this.companyId = row.id;
                this.showDetail(row, index, 'edit');
            },
            /**
             * 返显数据
             */
            showDetail(row,index,type){
                let that = this;
                this.isShow = true;
                this.handleIsShow(this.isShow);
                 getObj(row.id).then(function(res){
                    if(type === 'view'){
                        that.isShowView = true;
                        that.$refs.crud.rowView(row,index);
                    } else if(type == 'edit'){
                        that.isShowView = false;
                        that.$refs.crud.rowEdit(row,index);
                    }
                    // 干系人
                   that.stakeholderData = res.data.data.companyStakeholders;
                })
            },
            /**
             * 控制干系人和服务驻点显示和隐藏
             */
            handleIsShow(type){
                this.tableOption.group.forEach(item=>{
                    if(item.prop=="group2" || item.prop=="group3"){
                        item.display = type;
                    }
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
                let data = {
                    companyInfo: row,
                    relation: this.companyRelation,
                    companyStakeholders: this.stakeholders,
                    serviceStations: this.station,
                }
                addObj(data).then(response => {
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
                 let data = {
                    companyInfo: row,
                    relation: this.companyRelation,
                    companyStakeholders: this.stakeholders,
                    serviceStations: this.station,
                }
                putObj(data).then(response => {
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
             * 获取服务驻点数据
             */
            getStation(data){
                this.station = data;
            },
            /**
             * 获取公司关系数据
             */
            getCompanyRelation(data){
                this.companyRelation = data;
            },
            /**
             * 干系人
             */
            getStakeholder(data){
                this.stakeholders = data;
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
