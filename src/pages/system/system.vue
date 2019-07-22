<template>
  <div style="width: 100%;height: 100%">
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
    <div class="btn-box">
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="body">
      <div class="swiper-container banner1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"v-for="item in imgList">
            <div class="swiper-img" v-bind:style="{backgroundImage:'url(' + item.src + ')'}">
                <div class="title">
                  <div class="title1">{{item.eng}}</div>
                  <div class="title2">{{item.cha}}</div>
                </div>
              <div class="ti-box">
                <div class="swiper-button-prev banner2p"></div>
                <div class="swiper-button-next banner2n"></div>
              </div>
              <div class="swiper-container banner2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="ite in imgList">
                    <div class="swiper2-img" v-bind:style="{backgroundImage:'url(' + ite.src + ')'}"></div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>
<script>
  import Swiper from 'swiper';
export default {
  data() {
    return {
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
      }]
     }
  },
  mounted(){
    move(".swiper-container")
      .set("height",window.innerHeight+"px")
      .duration('1s')
      .end();
    move(".swiper-container")
      .set("width",window.innerWidth+"px")
      .duration('1s')
      .end();
    window.onresize = (val) => {
      return (() => {
        this.handleLableWidth(window.innerHeight,window.innerWidth);
      })()
    };
    new Swiper ('.banner1', {
      loop: true,
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      navigation: {
        nextEl: '.btn-box .swiper-button-next',
        prevEl: '.btn-box .swiper-button-prev',
      }
    });
    new Swiper ('.banner2', {
      navigation: {
        nextEl: '.banner2n',
        prevEl: '.banner2p',
      },
      loop: true,
    })
  },
    methods:{
      handleLableWidth(height,width){
        setTimeout(() => {
          move(".swiper-container")
            .set("width",width+"px")
            .duration('1s')
            .end();
          move(".swiper-container")
            .set("height",height+"px")
            .duration('1s')
            .end();
        }, 600)
      }
  }
}
</script>
<style scoped src="../../../static/css/system.css"></style>
<style scoped>

</style>
