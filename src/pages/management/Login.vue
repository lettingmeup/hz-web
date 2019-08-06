<template>
  <div class="login" v-bind:style="{backgroundImage:'url(' + bacground + ')'}">
    <!--标题栏-->
    <div id="head">
      <div class="container">
        <img class="logo" :src="outIcon"/>
        <span class="till">系统管理</span>
      </div>
    </div>
   <!--<div class="box" v-bind:style="{backgroundImage:'url(' + back + ')'}">-->
    <div class="com-name">华海（中国）教育集团</div>
    <div class="com-detail">中国教培招生运营第一课</div>
    <div class="com-detail2">新招生&nbsp;新管理&nbsp;新薪酬</div>

   <!--</div>-->
    <!--登陆框-->
    <div class="landingFrame">
      <div class="row1">登&nbsp;&nbsp;&nbsp;录</div>
      <div class="row2">
        <input v-model="user.name" type="text" class="fm-text" id="fm-login-id" tabindex="1" aria-label="用户名"
               placeholder="用户名" autocapitalize="off">
      </div>
      <div class="row3">
        <input v-model="user.pass" type="password" class="fm-text" id="fm-login-password" tabindex="2" aria-label="请输入登录密码"
               placeholder="请输入登录密码" maxlength="40" autocomplete="off" autocapitalize="off">
      </div>
      <div class="row4">
        <Button class="button" type="error" @click="login" ghost>登&nbsp;&nbsp;&nbsp;录</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url:'http://49.232.53.207/hhjx',
        user:{
          name:'',
          pass:''
        },
        outIcon:require('@/assets/logoLogin.png'),
        bacground:require('@/assets/z71.jpg')
      }
    },

    methods: {
      login(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/login/login"
        this.$axios.post(url,vm.user).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.$router.push({
              name: 'management'
            })
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
        })
      }
    },
    mounted(){
      move(".login")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      move(".login")
        .set("width",window.innerWidth+"px")
        .duration('1s')
        .end();
    }
  }
</script>

<style scoped>
  .login{
    /*text-align: center;*/
   background-size: 100% 100%;
    width: 100%;
    height: 100%;
  }
  /*标题样式*/
  #head{
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
    background: white;
    z-index: 1;
    color: #FFFF00;
    -moz-box-shadow:0px 2px 3px #ededed;
    -webkit-box-shadow:0px 2px 3px #ededed;
    box-shadow:0px 2px 3px #ededed;
  }
  #head .container{
    width: 98%;
    position: relative;
    height: 80px;
  }
  .logo{
    height: 79px;
    margin-left: 50px;
    border-radius:5px;
  }
  .till{
    font-size: 42px;
    color: #17233d;
    position: absolute;
    padding-top: 5px;
    margin-left: 10px;
    font-family:  "楷体";
    /*font-style: oblique;!*斜体*!*/
    font-weight: bold;/*加粗*/
  }
  /*内容样式*/
  .landingFrame{
    position: relative;
    height: 400px;
    width: 400px;
    background-color: white;
    float:right;
    margin-right: 130px;
    margin-top: 150px;
    /*阴影*/
    -moz-box-shadow:-1px 2px 4px #ededed, 0px 0px 20px #ededed;
    -webkit-box-shadow:-1px 2px 4px #ededed, 0px 0px 20px #ededed;
    box-shadow:-1px 2px 4px #ededed, 0px 0px 20px #ededed;
  }

  .landingFrame .row1{
    font-size: 40px;
    width: 100%;
    text-align: center;
    line-height: 100px;
    position: relative;
    margin-top: 10px;
    font-weight: bold;/*加粗*/
    font-family:  "楷体";
    color: rgb(229,0,18);
  }
  .landingFrame .row2{
    width: 100%;
    text-align: center;
    padding-top: 25px;
  }

  .landingFrame .row3{
    width: 100%;
    text-align: center;
    padding-top: 35px;
  }
  .landingFrame .row4 {
    width: 100%;
    text-align: center;
    /*line-height: 105px;*/
    padding-top: 35px;
  }
  .landingFrame .row4 .button{
    width: 120px;
    font-size: 15px;
  }

  #fm-login-id{
    height: 40px;
    font-size: 15px;
    width: 240px;

  }
  #fm-login-password{
    height: 40px;
    font-size: 15px;
    width: 240px;
  }
  .com-name{
    position: absolute;
    top: 188px;
    left: 100px;
    font-size: 27px;
  }
  .com-detail{
    position: absolute;
    top: 260px;
    left: 100px;
    font-size: 16px;
  }
  .com-detail2{
    position: absolute;
    top: 290px;
    left: 100px;
    font-size: 16px;
  }
  :hover.com-name{
    color: red;
  }
</style>
