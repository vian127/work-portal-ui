<template>
         <el-form :model="ruleForm2"
                   :rules="rules2"
                   ref="ruleForm2"
                   label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="原密码"
                          prop="password">
              <el-input type="password"
                        v-model="ruleForm2.password"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="newPassword">
              <el-input type="password"
                        v-model="ruleForm2.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"
                          prop="newPassword2">
              <el-input type="password"
                        v-model="ruleForm2.newPassword2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="submitForm('ruleForm2')">提交
              </el-button>
            </el-form-item>
          </el-form>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import {openWindow} from '@/util/util'
  import store from "@/store"
  import request from '@/router/axios'

  export default {
    name: 'passwordmanager',

    data() {
      var validatePass = (rule, value, callback) => {
        if (this.ruleForm2.password !== '') {
          if (value !== this.ruleForm2.newPassword) {
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

        ruleForm2: {
          accountId: '',
          username: '',
          password: '',
          newPassword: '',
          newPassword2: '',
        },
        rules2: {
          password: [{required: true, min: 6, message: '原密码不能为空且不少于6位', trigger: 'change'}],
          newPassword: [{required: true, min: 6, message: '不少于6位', trigger: 'change'}],
          newPassword2: [{required: true, validator: validatePass, trigger: 'blur'}]
        }
      }
    },
    created() {
      this.ruleForm2.accountId = this.userInfo.accountId
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      submitBaseInfoForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            request({
              url: '/saas/accountmgmt/edit',
              method: 'put',
              data: this.ruleForm2
            }).then(response => {
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