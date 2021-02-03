<template>
  <div class="app-container calendar-list-container">
    <basic-container>
      <el-row :span="24" :gutter="10">
        <el-col :xs="24"
                :sm="24"
                :md="8">
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
                    ref="appTree"
                    style="margin-top: 5px"
                    node-key="id"
                    default-expand-all
                    :data="treeAppData"
                    :props="treeAppProps"
                    :filter-node-method="filterNode"
                    @node-click="nodeClick">
            </el-tree>
          </el-card>
        </el-col>
		
        <el-col :xs="24"
                :sm="24"
                :md="16">
          <div class="clearfix">
            <h3>
              <!-- 
              <i class="el-icon-edit"></i> 
              当前应用：{{this.currAppName}}
              -->
              <el-button type="primary"
                @click="updatePermession"
                >更 新
              </el-button>
            </h3>
          </div>
     
          <el-tree ref="menuTree"
                  node-key="id"
                  :data="tableData"
                  :props="treeMenuProps"
                  :default-checked-keys="checkedKeys"
                  :check-strictly="false"
                  :filter-node-method="filterNode"
                  show-checkbox
                  highlight-current
                  default-expand-all
                  :expand-on-click-node="false"
                  >
                  <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ data.name }} [{{ data.code }}]</span>
                    <span>  </span>
                    <span v-if="data.type == '0' || ''">
                      <el-tag size="mini" effect="light" 
                        :type="data.type == '0' ? '' : data.type == '1' ? 'danger' : 'warning'">菜单
                      </el-tag>
                    </span>
                    <span v-else-if="data.type == '1'">
                      <el-tag size="mini" effect="light" 
                        :type="data.type == '0' ? '' : data.type == '1' ? 'danger' : 'warning'">按钮
                      </el-tag>
                    </span>
                  </span>
          </el-tree>
        </el-col>
      </el-row>
    </basic-container>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import {getList as getAppList} from '@/api/saas/appinfo'
  import {getRoleAppResTree, putRoleAppReses} from "@/api/saas/roleresource"
 
  export default {
    name: "RoleResource",

    props: {
      parentRow: {},
    },
	
    data() {
      return {
        filterText: '',
        treeAppProps: {
          label: 'name',
          value: 'id'
        },
        treeAppData: [],
        appId: null,
        currAppName: '',
     
        currRoleId: '',
        checkedKeys: [],
        checkedDsScope: [],
        treeMenuProps: {
          label: "name",
          value: 'id'
        },                
        menuIds: '',
        list: [],

        form: {},
        // tableOption: tableOption,
        tableData: [],
        paramsSearch:{},
        tableLoading: false,
        selectData: [],
    };
  },
	
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val)
      },
		
      parentRowRoleId(newV,oldV){
        console.log(newV,oldV)
        this.chageParentRow()
       },
    },
	
    created() {
		  this.getAppList()
    },
	
    computed: {
      ...mapGetters(["elements", "permissions"]),
      permissionList() {
        return {

        }
      },
      parentRowRoleId(){
        return this.parentRow.roleId
      },
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
          if(data && data.length > 0){
            this.currAppName = data[0].name
            console.debug("in getAppList response, currAppName = " + this.currAppName)
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
            this.$refs.appTree.setCurrentKey(data.id)
          })
          this.appId = data.id
          //this.currentApp = data
          this.currAppName = data.name
          this.getPage(this.page)
        }
      },

      chageParentRow(){
		if(this.currRoleId != this.parentRow.roleId){
          this.currRoleId = this.parentRow.roleId
          this.getPage(this.page)
        }
      },

      // getPage(page, params) {
      getPage(params) {
        this.tableLoading = true;
        // if(this.currRoleId == ''){
          this.currRoleId = this.parentRow.roleId
          console.log(this.currRoleId)
        //};
        getRoleAppResTree({
          roleId: this.currRoleId,
          appId: this.appId,
         })
        .then(response => {
          let data = response.data.data
          this.tableData = []
          this.tableData = data
          this.checkedKeys = []
          this.checkedKeys = this.setTableSelect(data, [])
          this.tableLoading = false
        }).catch(() => {
          this.tableLoading = false
        });
      },

      setTableSelect(row, actualSelects){
         if(row && row.length > 0){
          for(let i=0, len=row.length;i<len;i++){
            const item = row[i]
            if (item.children && item.children.length !== 0) {
              this.setTableSelect(item.children, actualSelects);
            }else{
              if(item.checked == 1){
                //this.checkedKeys.push(row[i].id)
                actualSelects.push(item.id)
              }
            }
          }
        }
        return actualSelects;
      },

      updatePermession: function() {
        //this.dialogLoading = true
        this.menuIds = ''
        this.menuIds = this.$refs.menuTree
          .getCheckedKeys().join(',').concat(',')
          .concat(this.$refs.menuTree.getHalfCheckedKeys().join(','))
        console.log(this.menuIds)
        putRoleAppReses({
          roleId: this.currRoleId,
          appId: this.appId,
          menuIds: this.menuIds
        }).then(() => {
          this.$message({
					  showClose: true,
					  message: '应用权限分配保存成功！',
					  type: 'success'
					})
        }).catch(() => {
          //this.dialogLoading = false
        })
      },

      /**
       * 刷新回调
       */
      refreshChange(page) {
        this.getPage(page)
      },
    }
  }
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>