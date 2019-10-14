<template>
  <div class="index">
    <div id="head">
      <div class="container">
        <img class="logo" :src="outIcon"/>
      </div>
      <div class="list">
        <ul class="tit-list" v-for="item in titleList">
          <li class="tit"><a class="hr" :href='item.src'>{{item.name}}</a><i class="line"></i></li>
        </ul>
      </div>
    </div>
    <div class="body" v-bind:style="{backgroundImage:'url(' + body.bacground + ')'}">
      <div class="tips">
         <div class="t1">{{body.engTitle}}</div>
        <div class="t2">{{body.chaTitle}}</div>
        <div class="t3">
          <span>{{body.comName}}</span>
        </div>
      </div>
      <div class="icon-box">
        <div class="icon"><Icon size="40" type="ios-arrow-down" /></div>
      </div>
    </div>
    <div class="bo" v-bind:style="{backgroundImage:'url(' + bo.bacground + ')'}">
        <div class="com-detail">
            <div class="com-t1"> {{bo.engTitle}}</div>
            <div class="com-t2">{{bo.chaTitle}}</div>
          <p class="com-t3">{{bo.text}}</p>
        </div>
    </div>
    <div class="po">
      <div class="po-t1">{{po1.engTitle}}</div>
      <div class="po-t2">{{po1.chaTitle}}</div>
      <div class="img-box">
        <div style="padding-right: 50px;float:left;padding-left: 50px;position: relative;" v-for="item in po1.imgList">
          <span class="date">{{item.time}}</span>
          <div class="im1" v-bind:style="{backgroundImage:'url(' + item.img + ')'}"></div>
          <div class="po-tit">{{item.detail}}</div>
        </div>
      </div>
    </div>


    <div class="honor">
      <div class="h-title">
           <div class="h-t-1">{{honor.engTitle}}</div>
           <div class="h-t-2">{{honor.chaTitle}}</div>
      </div>
      <div style="height: 50px;width: 100%">

      </div>
      <div style="height: 500px;width: 100%;padding-top: 130px" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"v-for="item in imgList">
            <div style="height: 100%;width: 100%">
              <img style="width: 100%;height: 80%" :src="item.img"/>
              <div class="scoll-tit">始终以实现“中国梦、教育梦”为己任，助力民办教育产业蓬勃发展，推动校长职业化、办学诚信化进程，引领社会关注民办教育行业对民办教</div>
            </div>
          </div>
        </div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
      <div style="height: 100px;width: 100%"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        body:{
          engTitle:"",
          chaTitle:"",
          comName:"华海教育集团",
          bacground:"",
        },
        bo:{
          engTitle:"",
          chaTitle:"",
          bacground:"",
          text:""
        },
        po1:{
          engTitle:"DEVELOPMENT COURSE",
          chaTitle:"发展历程",
          imgList:[]
        },
        honor:{
          engTitle:"GROUP OF HONOR",
          chaTitle:"集团荣誉"
        },
        url:'http://www.hhjxedu.com',
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
        }],
        imgList:[],
      }
    },
    mounted(){
      this.getAboutData();
      this.getdep();
      this.getScoll();
      move(".index")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      window.onresize = (val) => {
        return (() => {
          this.handleLableWidth(window.innerHeight);
        })()
      };

    },
    methods:{
      getdep(){
        var vm = this;
        var url = vm.url+"/hhjx/aboutMe/getAboutDep.do"
        var data={
          type:1
        }
        this.$axios.post(url,data).then(function (res) {
          vm.po1.imgList= res.data.list
        }).catch(function (error) {
          console.log(error)
        })
      },
      getScoll(){
        var vm = this;
        var url = vm.url+"/hhjx/aboutMe/getAboutScoll.do"
        this.$axios.post(url).then(function (res) {
          vm.imgList = res.data.scollList
          vm.$nextTick(function () {
            vm.swiperInit()
          })
        }).catch(function (error) {
          console.log(error)
        })
      },
      getAboutData(){
        var vm = this;
        var url = vm.url+"/hhjx/aboutMe/getAboutMeData.do"
        this.$axios.post(url).then(function (res) {
          vm.body.engTitle=res.data.p1Eng;
          vm.body.chaTitle=res.data.p1Cha;
          vm.body.bacground=res.data.p1Img;
          vm.bo.engTitle=res.data.p2Eng;
          vm.bo.chaTitle=res.data.p2Cha;
          vm.bo.bacground=res.data.peImg;
          vm.bo.text=res.data.p2Detail;
        }).catch(function (error) {
          console.log(error)
        })
      },
      swiperInit(){
        new Swiper ('.swiper-container', {
          loop: true,
          effect : 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          autoplay : 2000,
          scrollbar:'.swiper-scrollbar'
        })
      },
      handleLableWidth(val){
        setTimeout(() => {
          console.log(val)
          move(".index")
            .set("height",val+"px")
            .duration('1s')
            .end();
        }, 600)
      }
    }
    }

</script>
<style scoped src="../../../static/css/aboutMe.css"></style>
<style scoped>

</style>
