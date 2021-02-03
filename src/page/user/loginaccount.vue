<template>
          <el-form :model="loginAccountForm"
                    :rules="pwdRule"
                   ref="loginAccountForm"
                   label-width="100px"
                   class="demo-ruleForm"
                   >
            <el-row>
            <el-form-item label="用户密码登录">
            </el-form-item>
            <el-form-item label="登录账号" prop="loginCode">
            <el-input type="text" v-model="loginAccountForm.loginCode" disabled>
			        </el-input>
            </el-form-item>
            <el-form-item label="原密码"
                          prop="password">
              <el-input type="password"
                        v-model="loginAccountForm.password"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="newPassword">
              <el-input type="password"
                        v-model="loginAccountForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"
                          prop="newPassword2">
              <el-input type="password"
                        v-model="loginAccountForm.newPassword2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="submitForm('loginAccountForm')">修改密码
              </el-button>
            </el-form-item>
            </el-row>

            <el-row>  
            <el-form-item label="社交登录">
             </el-form-item>
            <el-form-item label="QQ" prop="thirdparty">
              <el-input type="text" v-model="loginAccountForm.loginCodeQQ" disabled>
			        </el-input>
              <a href="#"
                 style="color: blue"
                 @click="handleClick('qq')">绑定QQ</a> |
              </el-form-item>
            <el-form-item label="微信" prop="thirdparty">
              <el-input type="text" v-model="loginAccountForm.loginCodeWX" disabled>
			        </el-input>
              <a href="#"
                 style="color: blue"
                 @click="handleClick('wechat')">绑定微信</a>
            </el-form-item>
            <el-form-item label="码云" prop="thirdparty">
              <el-input type="text" v-model="loginAccountForm.loginCodeGitee" disabled>
			        </el-input>
              <a href="#"
                 style="color: blue"
                 @click="handleClick('gitee')">绑定码云</a> |
              </el-form-item>
              </el-row>
          </el-form>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import {openWindow} from '@/util/util'
  import store from "@/store"
  import request from '@/router/axios'
  import {getUserAccountLogins, changePassword} from '@/api/usermgmt'

  export default {
    name: 'loginaccount',

    data() {
      var validatePass = (rule, value, callback) => {
        if (this.loginAccountForm.password !== '') {
          if (value !== this.loginAccountForm.newPassword) {
            callback(new Error('两次输入密码不一致!'))
          } else {
            callback()
          }
        } else {
          callback()
        }
      }
      return {
        show: false,
        headers: {
          Authorization: 'Bearer ' + store.getters.access_token
        },

        loginAccountForm: {
          accountId: '',
          loginDomain: '',
          loginCode: '',
          password: '',
          newPassword: '',
          newPassword2: '',
          loginCodeDD: '',
          loginCodeQQ: '',
          loginCodeWX: '',
          loginCodeGitee: '',
          loginCodeOsc: '',
        },
        pwdRule: {
          password: [{required: true, min: 6, message: '原密码不能为空且不少于6位', trigger: 'change'}],
          newPassword: [{required: true, min: 6, message: '不少于6位', trigger: 'change'}],
          newPassword2: [{required: true, validator: validatePass, trigger: 'blur'}]
        }
      }
    },
    created() {
      this.loginAccountForm.accountId = this.userInfo.accountId
      this.getUserAccountLoginsFun()
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      getUserAccountLoginsFun(){
          getUserAccountLogins(this.userInfo.accountId).then(response => {
              if (response.data.data) {
                this.loginAccountForm = response.data.data
                this.loginAccountForm.password = ''
              }
          })
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // request({
            //   url: '/saas/accountmgmt/changepassword',
            //   method: 'put',
            //   data: this.loginAccountForm
            // }).then(response => {
            changePassword(this.loginAccountForm).then(response => {
              if (response.data.data) {
                this.$notify({
                  title: '成功',
                  message: '修改成功',
                  type: 'success',
                  duration: 2000
                })
                // 修改密码之后强制重新登录
                // if (this.switchStatus === 'passwordManager') {
                //   this.$store.dispatch('LogOut').then(() => {
                //     location.reload() // 为了重新实例化vue-router对象 避免bug
                //   })
                // }
              } else {
                this.$notify({
                  title: '失败',
                  message: response.data.msg,
                  type: 'error',
                  duration: 2000
                })
              }
            }).catch(() => {
              this.$notify({
                title: '失败',
                message: '修改失败',
                type: 'error',
                duration: 2000
              })
            })
          } else {
            return false
          }
        })
      },
    }
  }
</script>