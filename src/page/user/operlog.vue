<template>
    <el-form>
          <avue-crud ref="crud"
                     :page="page"
                     :data="tableData"
                     :table-loading="tableLoading"
                     :option="tableOption"
                     :permission="permissionList"
                     @on-load="getPage"
                     @search-change="searchChange"
                     @refresh-change="refreshChange"
                     @sort-change="sortChange"
                     >
          </avue-crud>
    </el-form>      
</template>


<script>
  import {mapState,mapGetters} from 'vuex'
  import {openWindow} from '@/util/util'
  import store from "@/store"
  import request from '@/router/axios'
  import {delObj, getMyPage as getPage} from '@/api/sys/log'
  import {tableOption} from './operlog'

  export default {
    name: 'operlog',

    data() {
      return {
        tableData: [],
        page: {
          total: 0, // 总页数
          currentPage: 1, // 当前页数
          pageSize: 20, // 每页显示多少条
          ascs:[],
          descs: 'create_time'
        },
        tableLoading: false,
        tableOption: tableOption,
 
        show: false,
        headers: {
          Authorization: 'Bearer ' + store.getters.access_token
        },
      }
    },
    created() {
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
      ...mapGetters(['permissions']),
      permissionList() {
        return {
          delBtn: this.vaildData(this.permissions.sys_log_del, false),
        };
      }
    },
    methods: {

      sortChange(val){
        let prop = val.prop ? val.prop.replace(/([A-Z])/g,"_$1").toLowerCase() : '';
        if(val.order=='ascending'){
          this.page.descs = []
          this.page.ascs = prop
        }else if(val.order=='descending'){
          this.page.ascs = []
          this.page.descs = prop
        }else{
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
          createId: this.userInfo.accountId
        }, params)).then(response => {
          this.tableData = response.data.data.records
          this.page.total = response.data.data.total
          this.page.currentPage = page.currentPage
          this.page.pageSize = page.pageSize
          this.tableLoading = false
        })
      },
      handleDel: function (row, index) {
        var _this = this
        this.$confirm('是否确认删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          return delObj(row.id)
        }).then(data => {
          this.getPage(this.page)
          _this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
        }).catch(function (err) {
        })
      },
      /**
       * 搜索回调
       */
      searchChange(form,done) {
        this.getPage(this.page, form)
        done()
      },
      /**
       * 刷新回调
       */
      refreshChange(page) {
        this.getPage(this.page)
      }
    }
  }
</script>