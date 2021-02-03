<!--
  - Copyright (C) 2018-2019
  - All rights reserved, Designed By www.ai-coder.net
-->
<template>
  <div class="execution">
    <basic-container>
      <el-row :gutter="10">
        <el-col :span="this.clickObj ? 14 : 24">
          <el-card class="box-card">

            <avue-crud ref="crud"
                       v-model="form"
                        :page="page"
                       :option="tableOption"
                       :data="tableData"
                       :permission="permissionList"
                       :table-loading="tableLoading"
                       @on-load="getPage"
                       @refresh-change="refreshChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="handleDel"
                       @sort-change="sortChange"
                       @search-change="searchChange">

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
					   
        <template slot="menu"
                  slot-scope="scope">
          <el-button size="mini"
                     type="text"
                     icon="el-icon-edit"
                     v-if="permissions.saas_sysrole_edit"
                     @click="handleItem(scope.row,scope.index)">模板
          </el-button>
          <el-button size="mini"
                     type="text"
                     icon="el-icon-plus"
                     v-if="permissions.saas_sysrole_perm"
                     @click="showDialog(scope.row,scope.index)">权限
          </el-button>
        </template>
			   
        </avue-crud>
        </el-card>
        </el-col>

        <el-col :span="10" v-if="this.clickObj">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h3><i class="el-icon-document-copy"></i> 角色模板，所属角色：[{{this.clickObj.code}}]{{this.clickObj.name}} </h3>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleItem()">关闭</el-button>
            </div>
            <avue-crud ref="crud2"
                       v-model="form2"
                       :page="page2"
                       :data="tableData2"
                       :permission="permissionList"
                       :before-open="beforeOpen2"
                       :option="tableOption2"
                       :table-loading="tableLoading2"
                       @on-load="getPage2"
                       @refresh-change="refreshChange2"
                       @sort-change="sortChange2"
                       >

              <template slot-scope="scope" slot="menuLeft">
                <el-button type="primary"
                  icon="el-icon-edit"
                  size="small"
                  plain
                  @click.stop="batchSaveTpl(scope.row, scope.index)">保存</el-button>
              </template>

            </avue-crud>

          </el-card>
        </el-col>
       </el-row>
      </basic-container>
<!--
 -->
        
      <el-dialog title="分配权限"
               :visible.sync="dialogVisible"
               width="80%"
      >
          <!-- <el-card class="box-card"> -->
            <!--
            <div slot="header" class="clearfix">
              <h3><i class="el-icon-document-copy"></i> 权限设置 </h3>
            </div>
            -->
            <role-resource 
              :parentRow="this.permObj"
            >
			      </role-resource>
          <!-- </el-card> -->
    </el-dialog>   
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getPage, getObj, addObj, putObj, delObj} from '@/api/saas/sysrole'
	  import {getPage2, batchSaveTpl} from '@/api/saas/sysroletemplate'
    import {tableOption} from './sysrole'
    import {tableOption2} from './sysroletemplate'
	  import RoleResource from './roleresource.vue'

    export default {
        name: 'sysrole',

        components: {
            RoleResource,
        },

        data() {
            return {
              // 角色列表相关数据
              form: {},
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

              // 角色模板相关数据
              clickObj: null,
              currentRoleId: '',
              form2: {},
              tableData2: [
                
              ],
              page2: {
                total: 0, // 总页数
                currentPage: 1, // 当前页数
                pageSize: 10 // 每页显示多少条
              },
              tableLoading2: false,
              tableOption2: tableOption2,

              // 权限分配弹窗数据
              permObj: null,
              dialogVisible: false,
              showDialogStatus: '',                      
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
                    addBtn: this.vaildData(this.permissions.saas_sysrole_add, false),
                    delBtn: this.vaildData(this.permissions.saas_sysrole_del, false),
                    editBtn: this.vaildData(this.permissions.saas_sysrole_edit, false),
                    viewBtn: this.vaildData(this.permissions.saas_sysrole_get, false)
                };
            }
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
             * 刷新回调
             */
            refreshChange(page) {
                this.getPage(page)
            },            
			
            /**
             * 更改记录状态
             */
			changeEnable(row){
                putObj({
                    id: row.id,
                    rstate: row.rstate
                }).then(data => {

                })
            },
			
          /**
           * 处理所选择的记录
           */
          handleItem: function (row) {
              if(row){
                  this.clickObj = row
                  this.page2.currentPage = 1
                  this.getPage2(this.page2)
             }else{
                  this.clickObj = null
              }
          },

			beforeOpen2(done) {
				this.$set(this.form2,"roleId",this.clickObj.roleId)
				done()
			},
			  
			sortChange2(val){
				let prop = val.prop ? val.prop.replace(/([A-Z])/g,"_$1").toLowerCase() : ''
				if(val.order=='ascending'){
				  this.page2.descs = []
				  this.page2.ascs = prop
				}else if(val.order=='descending'){
				  this.page2.ascs = []
				  this.page2.descs = prop
				}else{
				  this.page2.ascs = []
				  this.page2.descs = []
				}
				this.getPage2(this.page2)
			},
			  
			getPage2(page, params) {
        console.debug("in getPage2, roleId = " + this.clickObj.roleId)
				this.tableLoading2 = true
				getPage2(Object.assign({
				  current: page.currentPage,
				  size: page.pageSize,
				  descs: this.page2.descs,
				  ascs: this.page2.ascs,
				}, params, this.paramsSearch2,{
				  roleId: this.clickObj.roleId
				})).then(response => {
					let data = response.data.data
					this.tableData2 = data
					if(data && data.length > 0){
						for(let i=0, len=data.length;i<len;i++){
							data[i].$cellEdit = true
						}
					}

				  this.tableLoading2 = false
				}).catch(() => {
				  this.tableLoading2=false
				})
			},

			batchSaveTpl: function(form, done) {
			  var tplList = [];
			  this.tableData2.forEach(ele => {
				if(ele.tplMode == null ||  ele.tplMode == ''){
				  // 不需要提交保存
				}else{
				  tplList.push(ele);
				};
        });
        batchSaveTpl(tplList).then(data => {
					this.$message({
					  showClose: true,
					  message: '角色模板保存成功！',
					  type: 'success'
					})
					done()
					this.getPage2(this.page2)
				  }).catch(() => {
					  loading()
				  })
			  },
			  
			/**
			 * 刷新回调
			 */
			refreshChange2(val) {
				this.getPage2(val.page)
      },

      showDialog(row) {
        this.permObj = row
        this.dialogVisible = true
      },

      // afterShowDialog(status){
      //   this.showDialogStatus = status
      //   this.dialogVisible = false
      // },
    }		
}
</script>

<style lang="scss" scoped>
</style>
