<template>
  <div class="thirdparty-container">
    <div class="box"
         @click="handleClick('wechat')">
      <span class="container"
            :style="{backgroundColor:'#6ba2d6'}">
        <i icon-class="wechat"
           class="iconfont icon-weixin"></i>
      </span>
      <p class="title">微信</p>
    </div>
    <div class="box"
         @click="handleClick('tencent')">
      <span class="container"
            :style="{backgroundColor:'#8dc349'}">
        <i icon-class="qq"
           class="iconfont icon-qq1"></i>
      </span>
      <p class="title">QQ</p>
    </div>
    <div class="box"
         @click="handleClick('gitee')">
      <span class="container"
            :style="{backgroundColor:'#bf3030'}">
        <i icon-class="qq"
           class="iconfont icon-logo_gitee_icon"></i>
      </span>
      <p class="title">Gitee</p>
    </div>
    <!--
    <div class="box"
         @click="handleClick('osc')">
      <span class="container"
            :style="{backgroundColor:'#007B25'}">
        <i icon-class="qq"
           class="iconfont icon-OSChina_logo_"></i>
      </span>
      <p class="title">开源中国</p>
    </div>
    -->
  </div>
</template>

<script>
  import {openWindow} from '@/util/util'

  export default {
    name: 'thirdparty-signin',
    methods: {
      handleClick(thirdpart) {
      let url
        const redirect_uri = encodeURIComponent(window.location.origin + '/#/authredirect')
        // console.debug("redirect_uri="+redirect_uri);
        if (thirdpart === 'wechat') {
          const appid = 'wxd1678d3f83b1d83a'
          url = `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${redirect_uri}&state=WX&response_type=code&scope=snsapi_login#wechat_redirect`
        } else if (thirdpart === 'tencent') {
          const client_id = '101322838'
          url = `https://graph.qq.com/oauth2.0/authorize?response_type=code&state=QQ&client_id=${client_id}&redirect_uri=${redirect_uri}`
        } else if (thirdpart === 'gitee') {
          const client_id = '0ab77039ae42563d2916ce0d585636fd400750a91bf2e1d3a6c91baec34f32c3'
          url = `https://gitee.com/oauth/authorize?response_type=code&client_id=${client_id}&state=GITEE&redirect_uri=${redirect_uri}`
        } else if (thirdpart === 'osc') {
          const client_id = 'uLJ41IGu7qAGmzSVHwF4'
          url = `https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=${client_id}'&state=OSC&redirect_uri=${redirect_uri}`
        }
        openWindow(url, thirdpart, 540, 540)
      }     
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .thirdparty-container {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .box {
      cursor: pointer;
    }

    .iconfont {
      color: #fff;
      font-size: 30px;
    }

    .container {
      $height: 50px;
      display: inline-block;
      width: $height;
      height: $height;
      line-height: $height;
      text-align: center;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .title {
      text-align: center;
    }
  }
</style>
