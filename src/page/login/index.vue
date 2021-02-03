<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-logo">
        <img src="/img/logo.png" alt="">
      </div>
      <p class="login-tip">{{ website.infoTitle}}</p>
      <div class="login-border">
        <div class="login-main">
          <userLogin v-if="activeName==='user'" />
          <codeLogin v-else-if="activeName==='code'" />
          <thirdLogin v-else-if="activeName==='third'" />
          <div class="login-menu">
            <a href="#"
               @click.stop="activeName='user'">账号密码</a>
            <a href="#"
               @click.stop="activeName='code'">手机号登录</a>
            <a href="#"
               @click.stop="activeName='third'">第三方登录</a>
          </div>
        </div>

      </div>
    </div>
<!--    
-->  
    <div class="login-copyright">
      Copyright © 2020 Ai-Coder.net. All rights reserved.
    </div>
 
    <top-color v-show="false" />
  </div>
</template>
<script>
  import userLogin from "./userlogin";
  import codeLogin from "./codelogin";
  import thirdLogin from "./thirdlogin";
  import register from "./register";
  import {mapGetters} from "vuex";
  import {getStore, setStore} from "@/util/store";
  import {dateFormat} from "@/util/date";
  import {validatenull} from "@/util/validate";
  import topColor from "@/page/index/top/top-color";


  export default {
    name: "login",
    components: {
      userLogin,
      codeLogin,
      thirdLogin,
      register,
      topColor
    },
    data() {
      return {
        time: "",
        activeName: this.$route.meta.activeName,
        thirdPartyForm: {}
      };
    },
    watch: {
      $route: {
        handler() {
          const params = this.$route.query
          if (validatenull(params.state) && validatenull(params.code)) return

          this.thirdPartyForm.state = params.state
          this.thirdPartyForm.code = params.code
          this.$store.dispatch('LoginByThirdParty', this.thirdPartyForm).then(
            () => {
              this.$store.commit("SET_TOP_MENU_INDEX", 0)
              this.$router.push({path: this.tagWel.value})
            }).catch(() => {

          })
        },
        immediate: true
      }
    },
    created() {
      this.getTime();
      setInterval(() => {
        this.getTime();
      }, 1000);
    },
    mounted() {
    },
    computed: {
      ...mapGetters(["website",'tagWel'])
    },
    props: [],
    methods: {
      getTime() {
        this.time = dateFormat(new Date());
      }
    }
  };
</script>

<style lang="scss">
  @import "@/styles/login.scss";
</style>
