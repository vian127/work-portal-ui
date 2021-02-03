<template>
  <div class="app-container calendar-list-container">
    <basic-container>
      <el-tabs @tab-click="switchTab" v-model="switchStatus" tabPosition="left">
        <el-tab-pane label='基本信息' name='baseInfo'>
          <base-info></base-info>
        </el-tab-pane>

        <el-tab-pane label='登录账号' name='loginAccount'>
          <login-account></login-account>
          <!--<password-manager></password-manager>-->
        </el-tab-pane>

        <el-tab-pane label='登录日志' name='loginLog'>
            <login-log></login-log>
        </el-tab-pane>

        <el-tab-pane label='操作日志' name='operLog'>
            <oper-log></oper-log>
        </el-tab-pane>
      </el-tabs>
    </basic-container>
  </div>
</template>


<script>
  import {mapState,mapGetters} from 'vuex'
  import {openWindow} from '@/util/util'
  import store from "@/store"
  import request from '@/router/axios'
 
  import BaseInfo from './baseinfo.vue'
  import LoginAccount from './loginaccount.vue'
  import PasswordManager from './password.vue'
  import LoginLog from './loglogin.vue'
  import OperLog from './operlog.vue'

  export default {
    name: 'myuserinfo',

    components: {
      BaseInfo,
      LoginAccount,
      PasswordManager,
      LoginLog,
      OperLog,
    },

    data() {
      return {
        switchStatus: '',
        show: false,
        headers: {
          Authorization: 'Bearer ' + store.getters.access_token
        },
      }
    },
    created() {
      this.switchStatus = 'baseInfo'
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      switchTab(tab, event) {
        this.switchStatus = tab.name
      },
    }
  }
</script>
