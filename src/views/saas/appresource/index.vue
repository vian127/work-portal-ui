<template>
  <div class="app-container calendar-list-container">
    <basic-container>
      <el-row :span="24" :gutter="10">
        <el-col :xs="24"
                :sm="24"
                :md="3">
          <el-card shadow="never">
            <div slot="header">
              <span>应用列表</span>
            </div>
            <el-input
                    placeholder="输入关键字进行过滤"
                    size="mini"
                    v-model="filterText">
            </el-input>
            <el-tree
                    style="margin-top: 5px"
                    :data="treeAppData"
                    :props="treeAppProps"
                    :filter-node-method="filterNode"
                    node-key="id"
                    default-expand-all
                    ref="tree"
                    @node-click="nodeClick">
            </el-tree>
          </el-card>
        </el-col>
		
        <el-col :xs="24"
                :sm="24"
                :md="21">
      <avue-crud
        ref="crud"
        v-model="form"
        @on-load="getPage"
        :option="tableOption"
        :data="tableData"
        :permission="permissionList"
        :table-loading="tableLoading"
        @refresh-change="refreshChange"
        @row-update="handleUpdate"
        @row-save="handleSave"
        @row-del="handleDel"
        @search-change="searchChange"
        >

        <template slot="type" slot-scope="scope" >
          <el-tag size="mini" effect="light" :type="scope.row.type == '0' ? '' : scope.row.type == '1' ? 'danger' : 'warning'">{{scope.row.$type}}</el-tag>
        </template>
        <template slot="icon" slot-scope="scope" >
          <i :class="scope.row.icon"></i>
        </template>
		
        <template slot="menu" slot-scope="scope">
          <el-button type="text"
                     v-if="permissions.saas_appresource_add && scope.row.type == '0'"
                     icon="el-icon-plus"
                     size="small"
                     plain
                     @click="addChildrenMenu(scope.row,scope.index)">添加下级</el-button>
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

        </el-col>
      </el-row>
    </basic-container>
  </div>
</template>

<script>
  import {getAppAllTree, addObj, delObj, getObj, putObj} from "@/api/saas/appresource"
  import {getList as getAppList} from '@/api/saas/appinfo'
  import { tableOption } from './appresource'

  import {mapGetters} from "vuex"

  export default {
    name: "appresource",
	
    data() {
      return {
        filterText: '',
        treeAppProps: {
          label: 'name',
          value: 'id'
        },
        treeAppData: [],
		    appId: null,
		
		    form: {},
        tableOption: tableOption,
        tableData: [],
		    paramsSearch:{},
        tableLoading: false,
      };
    },
	
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val)
      },
		
      // 'form.type'() {
      //   let column4 = this.tableOption.column[4]
      //   let column5 = this.tableOption.column[5]
      //   let column6 = this.tableOption.column[6]
      //   let column7 = this.tableOption.column[7]
      //   if (this.form.type === '0') {
      //     column4.display = true
      //     column5.display = true
      //     column6.display = true
      //     column7.display = true
      //   }
      //   if (this.form.type === '1') {
      //     column4.display = false
      //     column5.display = false
      //     column6.display = false
      //     column7.display = false
      //   }
      // },
    },
	
    created() {
		  this.getAppList()
    },
	
    computed: {
      ...mapGetters(["elements", "permissions"]),
      permissionList() {
        return {
          addBtn: this.vaildData(this.permissions.saas_appresource_add, false),
          delBtn: this.vaildData(this.permissions.saas_appresource_del, false),
          editBtn: this.vaildData(this.permissions.saas_appresource_edit, false),
          viewBtn: this.vaildData(this.permissions.saas_appresource_get, false)
        }
      }
    },
	
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      //加载应用列表
      getAppList(){
        getAppList({
          //appType: '2'
        }).then(response => {
          //let data = response.data.data
          let data = response.data
          this.treeAppData = data
          this.$refs.crud.DIC.appId = this.treeAppData
          if(data && data.length > 0){
            //默认加载第一个应用的数据
            this.nodeClick({
              id: data[0].id
            })
          }
        }).catch(() => {

        })
      },
      nodeClick(data) {
        if(this.appId != data.id){
          this.$nextTick(() => {
            this.$refs.tree.setCurrentKey(data.id)
          })
          this.appId = data.id
		      // this.page.currentPage = 1
          this.paramsSearch = {}
          this.$refs.crud.searchReset()
          this.getPage(this.page)
        }
      },
      searchChange(params,done){
        params = this.filterForm(params)
        this.paramsSearch = params
        // this.page.currentPage = 1
        // this.getPage(this.page,params)
        this.getPage(params)
        done()
      },
      
      // getPage(page, params) {
      getPage(params) {
        this.tableLoading = true
        getAppAllTree(Object.assign({
            appId: this.appId
          }, params, this.paramsSearch)).then(response => {
          this.tableData = response.data.data
          this.$refs.crud.DIC.parentId = this.tableData
          this.tableLoading = false
        }).catch(() => {
          this.tableLoading = false
        })
      },

      handleDel: function(row, index) {
        var _this = this
        this.$confirm('是否确认删除此数据', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function() {
          return delObj(row.id)
        }).then(data => {
          _this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
          this.getPage(this.page)
          // this.$router.go(0)
        }).catch(function(err) { })
      },
      /**
       * @title 数据更新
       * @param row 为当前的数据
       * @param index 为当前更新数据的行数
       * @param done 为表单关闭函数
       *
       **/
      handleUpdate: function(row, index, done, loading) {
        putObj(row).then(data => {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
          done()
          this.getPage(this.page)
          // this.$router.go(0)
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
      handleSave: function(row, done, loading) {
        addObj(row).then(data => {
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          })
          done()
          this.getPage(this.page)
          // this.$router.go(0)
        }).catch(() => {
          loading()
        })
      },
	  
		changeEnable(row){
			putObj({
				id: row.id,
				rstate: row.rstate
			}).then(data => {

			})
		},

      /**
       * 刷新回调
       */
      refreshChange(page) {
        this.getPage(page)
      },
	  
      addChildrenMenu(row, index){
        this.form.appId = row.appId
        this.form.parentId = row.id
        this.$refs.crud.rowAdd()
      }
    }
  }
</script>

