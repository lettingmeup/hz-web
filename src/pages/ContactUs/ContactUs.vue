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
              <img class="imgQQ" src="@/assets/qq.jpg">
            </span>
            <span  v-show="imgWe">
               <div class="icon" @click="close1">关闭</div>
              <img class="imgWe" src="@/assets/wechat.jpg">
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
        outIcon:require('@/assets/logo.png'),
        group:{
          bacground:"http://www.lpcollege.com/Public/Home/Images/z55.png",
          engTitle:"CONTACT US",
          chaTitle:"联系我们",
          tips:"如果您使用中遇到任何问题，请联系我们的客服：",
          qqimg:"http://www.lpcollege.com/Public/Home/Images/z57.png",
          weChatImg:"http://www.lpcollege.com/Public/Home/Images/z58.png"
        },
        titleList:[{
          name:"首页",
          src:"http://47.102.114.47/dist/index.html#/"
        },{
          name:"关于我们",
          src:"http://47.102.114.47/dist/index.html#/aboutMe"
        },{
          name:"课程体系",
          src:"http://47.102.114.47/dist/index.html#/system"
        },{
          name:"卓越团队",
          src:"http://47.102.114.47/dist/index.html#/team"
        },{
          name:"人才中心",
          src:"http://47.102.114.47/dist/index.html#/talentcenter"
        },{
          name:"联系我们",
          src:"http://47.102.114.47/dist/index.html#/contactus"
        }],
        imgQQ:false,
        imgWe:false
      }
    },
    created(){

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
      }
    }
  }
</script>
<style scoped src="../../../static/css/contactus.css"></style>

