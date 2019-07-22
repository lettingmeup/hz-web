<template>
  <div>
    <div id="head">
      <div class="container">
        <img class="logo" :src="outIcon"/>
      </div>
      <div class="list">
        <ul class="tit-list" v-for="item in titleList">
          <li class="tit"><a class="hr" :href=item.src>{{item.name}}</a><i class="line"></i></li>
        </ul>
      </div>
    </div>
    <full-page :options="options">
      <div class="section">
        <div style="height: 100%;width: 100%;">
           <div class="page1">
             <div class="page1-title1">{{team.engTitle}}</div>
             <div class="page1-title2">{{team.chaTitle}}</div>
             </div>
          <div class="img-box">
              <img style="height: 100%;width: 100%" src="http://www.lpcollege.com/Public/Home/Images/team/t2.png"/>
           </div>
        </div>
      </div>
      <div class="section">
        <div style="height: 100%;width: 100%;">
           <div class="float-box">
             <div class="school">{{float.t1}}</div>
             <div class="child">{{float.t2}}</div>
           </div>
          <div class="ne-box">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div style="height: 100%;width: 100%" class="swiper-container">

            <div class="swiper-wrapper">
              <div class="swiper-slide"v-for="item in imgList">
                <div class="swiper-img" v-bind:style="{backgroundImage:'url(' + item.src + ')'}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        team:{
          engTitle:"EXCELLENT TEAM",
          chaTitle:"卓越团队"
        },
        float:{
          t1:"培训学校系列",
          t2:"幼儿园系列"
        },
        imgList:[{
          src:"http://www.lpcollege.com/Public/Home/Images/course/c1.png",
          eng:"TRAINING SCHOOL SERIES",
          cha:"培训学校系列"
        },{
          src:"http://www.lpcollege.com/Public/Home/Images/course/c2.png",
          eng:"KINDERGARTEN SERIES",
          cha:"幼儿园系列"
        }],
        outIcon:require('@/assets/logo.png'),
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
        options:{
          navigation: true,
          scrollingSpeed:500,
          navigationPosition:"left",
          css3:true
        }
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }
  }
  </script>
<style scoped src="../../../static/css/team.css"></style>
<style scoped>
  #fp-nav ul li a span, .fp-slidesNav ul li a span{
    width: 20px;
    height: 8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 0px;
    background: #8b8b8c;
  }
  #fp-nav ul li a.active span, .fp-slidesNav ul li a.active span {
    background: red;
    width: 40px;
  }
  #fp-nav ul li, .fp-slidesNav ul li{
    height: 30px;
    flex-direction:column-reverse;
  }
  #fp-nav ul, .fp-slidesNav ul {
    width: 70px;
  }
  #fp-nav ul li a span, .fp-slidesNav ul li a span{
    color: rgba(0, 0, 0, 0);
  }
</style>
