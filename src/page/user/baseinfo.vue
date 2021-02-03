<template>
          <el-form :model="baseInfoForm"
                   ref="baseInfoForm"
                   label-width="100px"
                   class="demo-ruleForm">

            <!--
            <el-form-item label="租户ID" prop="tenantId">
              <el-input type="text" v-model="baseInfoForm.tenantId" disabled>
			        </el-input>
            </el-form-item> 
            -->
            <el-form-item label="当前租户" prop="tenantName">
              <el-input type="text" v-model="baseInfoForm.tenantName" disabled>
			        </el-input>
            </el-form-item>   
            <el-form-item label="登录方式" prop="authType">
              <el-input type="text" v-model="baseInfoForm.authType" disabled>
			        </el-input>
            </el-form-item>
            <el-form-item label="登录账号" prop="loginCode">
              <el-input type="text" v-model="baseInfoForm.loginCode" disabled>
			        </el-input>
            </el-form-item>
            <el-form-item label="用户代码" prop="code">
              <el-input type="text" v-model="baseInfoForm.code" disabled>
			        </el-input>
            </el-form-item>
            <el-form-item label="用户姓名" prop="name">
              <el-input v-model="baseInfoForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="用户昵称" prop="alias">
              <el-input v-model="baseInfoForm.alias" placeholder="请输入昵称"></el-input>
            </el-form-item>            
            <el-form-item label="手机号" prop="mobile">
              <el-input v-model="baseInfoForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="baseInfoForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="头像">
              <avue-form :option="optionAvatar" v-model="baseInfoForm" :upload-after="handleAvatarSuccess"></avue-form>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="submitBaseInfoForm('baseInfoForm')">提交
              </el-button>
            </el-form-item>
          </el-form>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import {openWindow} from '@/util/util'
  import store from "@/store"
  import request from '@/router/axios'
  import {updateUser} from '@/api/usermgmt'

  export default {
    data() {
      return {
        optionAvatar: {
          emptyBtn: false,
          submitBtn: false,
          labelWidth: 120,
          column: [
            {
              prop: 'avatar',
              type: 'upload',
              listType: 'picture-img',
              canvasOption: {
                text: 'www.ai-coder.net',
                ratio: 0.1
              },
              action: '/sys/file/upload?fileType=image&dir=user/',
              propsHttp: {
                url: 'link'
              },
              loadText: '附件上传中，请稍等',
              span: 24,
              tip: '只能上传jpg/png文件，且不超过500kb',
            }
          ]
        },
        switchStatus: '',
        show: false,
        headers: {
          Authorization: 'Bearer ' + store.getters.access_token
        },

        baseInfoForm: {
            tenantId:'',
            tenantName: '',
            accountId: '',
            authType: '',
            loginCode: '',
            code: '',
		        name: '',
		        alias: '',
            mobile: '',
            email: '',
            avatar: '',
        },
      }
    },
    created() {
      this.baseInfoForm.tenantId = this.tenantId
      this.baseInfoForm.tenantName = this.tenantName
      this.baseInfoForm.accountId = this.userInfo.accountId
      this.baseInfoForm.authType = this.userInfo.authType
      this.baseInfoForm.loginCode = this.userInfo.loginCode
      this.baseInfoForm.code = this.userInfo.code
      this.baseInfoForm.name = this.userInfo.name
      this.baseInfoForm.alias = this.userInfo.alias
      this.baseInfoForm.mobile = this.userInfo.mobile
      this.baseInfoForm.email = this.userInfo.email
      this.baseInfoForm.avatar = this.userInfo.avatar != null ? this.userInfo.avatar : ''
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo,
        tenantId: state => state.user.tenantId,
        tenantName: state => state.user.tenantName
      }),
    },
    methods: {
       submitBaseInfoForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // request({
            //   url: '/saas/accountmgmt/edit',
            //   method: 'put',
            //   data: this.baseInfoForm
            // }).then(response => {
            updateUser(this.baseInfoForm).then(response => {
              if (response.data.data) {
                this.$notify({
                  title: '成功',
                  message: '修改成功',
                  type: 'success',
                  duration: 2000
                })
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
      handleAvatarSuccess(res, done, loading) {
        this.baseInfoForm.avatar = res.url;
        done()
      },
     }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
