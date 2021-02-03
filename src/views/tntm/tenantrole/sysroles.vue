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
				@selection-change="selectionChange"
			>
                <template slot-scope="scope" slot="menuLeft">
                    <el-button type="primary"
                    icon="el-icon-plus"
                    size="small"
                    plain
                    @click.stop="handleAdd(scope.row, scope.index)">提交</el-button>
                </template>

				<template slot="tplMode" slot-scope="scope" >
				  <el-tag size="mini" effect="light" :type="scope.row.tplMode == 'MA' ? 'danger' : 'primary'">
					{{scope.row.$tplMode}}
				  </el-tag>
				</template>
				
            </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getSysRoles, addSysRoles} from '@/api/tntm/tenantrole'
    import {tableOption} from './sysroles'

    export default {
        name: 'SelectSaasApp',

 		props: {
			currTid: '',
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
 				
                sysRoleIds: '',
                addAppSucess: '',
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
                };
            }
        },
        methods: {
            /**
             * 获取列表(分页)数据
             */
            getPage(page, params) {
                 this.addAppSucess = ''
                this.tableLoading = true
                getSysRoles(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize,
                    descs: this.page.descs,
                    ascs: this.page.ascs,
                }, params, this.paramsSearch)).then(response => {
                    this.tableData = response.data.data
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
             * @title 新增租户应用
             *
             **/
			handleAdd(){
                console.log("tenantId:" + this.currTid);
                console.log("sysRoleIds :" + this.sysRoleIds);
               
				addSysRoles({
					tenantId: this.currTid,
					sysRoleIds: this.sysRoleIds,
				}).then(() => {
					this.$notify({
						title: '成功',
						message: '提交成功！',
						type: 'success',
						duration: 2000
                     });
                    // 通知父组件关闭弹窗并刷新页面
                    this.addAppSucess = 'OK'
                    this.$emit('afterAddApp', this.addAppSucess)
 				}).catch(() => {
                  //this.dialogLoading = false
                    this.addAppSucess = ''
				})
			},
			
			selectionChange(list){
				//this.$message.success('选中的数据'+ JSON.stringify(list));
                this.sysRoleIds = ''
                var len=list.length;
                for(var i=0;i<len;i++){
                    if(i>0){
                        this.sysRoleIds = this.sysRoleIds + ",";
                    }
                    this.sysRoleIds = this.sysRoleIds + list[i].id;
                    //console.info(i +":"+ list [i]);
                }				
			},

        }
    }
</script>

<style lang="scss" scoped>
</style>
