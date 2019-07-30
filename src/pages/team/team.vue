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
              <img style="height: 100%;width: 100%" :src='team.img'/>
           </div>
        </div>
      </div>
      <div class="section">
        <div class="sec2" style="height: 100%;width: 100%;">
           <div class="float-box">
             <div @click="changeScoll(item.id)" class="school" v-for="item in floatList">{{item.cha}}</div>
           </div>
          <div class="ne-box">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div style="height: 100%;width: 100%" class="swiper-container">

            <div class="swiper-wrapper">
              <div class="swiper-slide"v-for="item in imgList">
                <div class="swiper-img" v-bind:style="{backgroundImage:'url(' + item.img + ')'}"></div>
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
          img:"",
          engTitle:"EXCELLENT TEAM",
          chaTitle:"卓越团队"
        },
        floatList:[],
        chaTitle:'',
        imgList:[],
        outIcon:require('@/assets/logo.png'),
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
        options:{
          navigation: true,
          scrollingSpeed:500,
          navigationPosition:"left",
          css3:true
        }
      }
    },
    mounted(){
      this.getFaData();
      this.changeScoll(1)
      this.getTeamImg();
    },
    methods:{
      getTeamImg(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/team/getTeamImg.do"
        this.$axios.post(url).then(function (res) {
          vm.team.img = res.data.img
        }).catch(function (error) {
          console.log(error)
        })
      },
      getFaData(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/system/getFaData.do"
        this.$axios.post(url).then(function (res) {
          vm.floatList = res.data.listBo
        }).catch(function (error) {
          console.log(error)
        })
      },
      changeScoll(val){
        var vm = this;

        var url = "http://49.232.53.207/hhjx/team/getTeamMate.do"
        var data={
          sysFaId:val
        }
        this.$axios.post(url,data).then(function (res) {
          vm.imgList = res.data.list
          vm.$nextTick(function () {
            vm.swiperInit()
          })
        }).catch(function (error) {
          console.log(error)
        })
      },
      swiperInit(){

        new Swiper ('.swiper-container', {
          loop: false,
          effect:'fade',
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
