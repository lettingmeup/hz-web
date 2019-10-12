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
            <div class="swiper-img" v-bind:style="{backgroundImage:'url(' + item.img + ')'}">
                <div class="title">
                  <div class="faId" style="display: none">{{item.id}}</div>
                  <div class="title1">{{item.eng}}</div>
                  <div class="title2">{{item.cha}}</div>
                </div>
              <div class="ti-box">
                <div class="swiper-button-prev banner2p"></div>
                <div class="swiper-button-next banner2n"></div>
              </div>
              <div class="swiper-container banner2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="ite in cliImg">
                    <div class="swiper2-img" v-bind:style="{backgroundImage:'url(' + ite.img + ')'}"></div>
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
      url:"http://www.hhjxedu.com",
      imgList:[],
      cliImg:[],
      outIcon:require('@/assets/logo.png'),
      titleList:[{
        name:"首页",
        src:"http://www.hhjxedu.com/#/"
      },{
        name:"关于我们",
        src:"http://www.hhjxedu.com/#/aboutMe"
      },{
        name:"课程体系",
        src:"http://www.hhjxedu.com/#/system"
      },{
        name:"卓越团队",
        src:"http://www.hhjxedu.com/#/team"
      },{
        name:"人才中心",
        src:"http://www.hhjxedu.com/#/talentcenter"
      },{
        name:"联系我们",
        src:"http://www.hhjxedu.com/#/contactus"
      }]
     }
  },
  mounted(){
    this.getFaData();
    this.getCliData(1)
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
  },
    methods:{
    getFaData(){
      var vm = this;
      var url = vm.url+"/hhjx/system/getFaData.do"
      this.$axios.post(url).then(function (res) {
        vm.imgList = res.data.listBo
        vm.$nextTick(function () {
          vm.swiperInit()
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    getCliData(text){
      var vm = this;
      var url = vm.url+"/hhjx/system/getCliData.do"
      var data={
        faId:text
      }
      this.$axios.post(url,data).then(function (res) {
        vm.cliImg = res.data.list
        vm.$nextTick(function () {
          console.log(22)
          vm.swiperInit1()
        })
      }).catch(function (error) {
        console.log(error)
      })
      },
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
      },
      swiperInit1(){

        new Swiper ('.banner2', {
          effect:'fade',
          nextButton: '.banner2n',
          prevButton: '.banner2p',
          effect:'fade',
          loop: false,
          speed:1000,
        })
      },
      swiperInit(){
      var vm = this;
        new Swiper ('.banner1', {
          loop: false,
          speed:1000,
          effect:'fade',
          // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
          on: {
            slideChangeTransitionStart: function(){
              var txt = $('.swiper-slide-active .faId').html();
              vm.getCliData(txt);
            },
          },
            nextButton: '.btn-box .swiper-button-next',
            prevButton: '.btn-box .swiper-button-prev',
        });
      }
  }
}
</script>
<style scoped src="../../../static/css/system.css"></style>
<style scoped>

</style>
