<template>
  <div class="ContactUs">
    <!--标题栏-->
    <div id="head">
      <div class="container">
        <img class="logo" :src="outIcon"/>
      </div>
      <div class="list">
        <ul class="tit-list" v-for="item in titleList">
          <li class="tit"><a class="hr" :href="item.src">{{item.name}}</a><i class="line"></i></li>
        </ul>
      </div>
    </div>
    <!--内容-->
    <div id="contact" style="height:534px;" v-bind:style="{backgroundImage:'url(' + group.bacground + ')'}">
      <div class="container data">
        <div class="group">
          <div class="en">{{group.engTitle}}</div>
          <div class="cn">{{group.chaTitle}}</div>
          <div class="tips">{{group.tips}}</div>
          <div class="zixun">
            <img :src="group.qqimg" @click="click(true)">
            <img :src="group.weChatImg" @click="click(false)">
          </div>
          <div class="img">
            <span  v-show="imgQQ">
              <div class="icon" @click="close1">关闭</div>
              <img class="imgQQ" :src="mqq">
            </span>
            <span  v-show="imgWe">
               <div class="icon" @click="close1">关闭</div>
              <img class="imgWe" :src="wexin">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        mqq:"",
        wexin:"",
        outIcon:require('@/assets/logo.png'),
        group:{
          bacground:require('@/assets/z55.png'),
          engTitle:"CONTACT US",
          chaTitle:"联系我们",
          tips:"如果您使用中遇到任何问题，请联系我们的客服：",
          qqimg:require('@/assets/z57.png'),
          weChatImg:require('@/assets/z58.png'),
        },
        titleList:[{
          name:"首页",
          src:"http://49.232.53.207/#/"
        },{
          name:"关于我们",
          src:"http://49.232.53.207/#/aboutMe"
        },{
          name:"课程体系",
          src:"http://49.232.53.207/#/system"
        },{
          name:"卓越团队",
          src:"http://49.232.53.207/#/team"
        },{
          name:"人才中心",
          src:"http://49.232.53.207/#/talentcenter"
        },{
          name:"联系我们",
          src:"http://49.232.53.207/#/contactus"
        }],
        imgQQ:false,
        imgWe:false
      }
    },
    created(){
this.getimg();
    },
    mounted(){
      move(".ContactUs")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      move("#contact")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      window.onresize = () => {
        return (() => {
          setTimeout(() => {
            move(".ContactUs")
              .set("height",window.innerHeight+"px")
              .duration('1s')
              .end();
            move("#contact")
              .set("height",window.innerHeight+"px")
              .duration('1s')
              .end();
          }, 600)
        })()
      };
    },
    methods:{
      click(flag){
        if(flag){
          this.imgQQ=true;
          this.imgWe=false;
        }else{
          this.imgWe=true;
          this.imgQQ=false;
        }
      },
      close1(){
        this.imgQQ=false;
        this.imgWe=false;
      },
      getimg(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/contact/getContacImgList.do"
        this.$axios.post(url).then(function (res) {
          vm.mqq=res.data.qq
            vm.wexin=res.data.wechat
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>
<style scoped src="../../../static/css/contactus.css"></style>

