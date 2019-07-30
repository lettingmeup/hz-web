<template>
  <div class="index">
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
    <div  style="text-align: center">
      <div class="icon">向下</div>
    </div>
    <full-page :options="options">
    <div class="section">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"v-for="item in imgList">
            <div style="height: 100%;width: 100%;">
              <img style="width: 100%;height: 100%" :src="item.src"/>
            </div>
          </div>
        </div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>

    </div>
    <div class="section">
      <div class="about-me" style="width: 100%;height: 100%">
          <div class="detail">
            <div class="abouume-detail">
              <div class="t1">{{aboutUs.engTitle}}</div>
              <div class="t2">{{aboutUs.chaTitle}}</div>
              <div class="t3">{{aboutUs.detail}}</div>
              <div class="t4">
                <div class="t4-cl"><a class="more" :href=aboutUs.href>查看更多</a></div>
              </div>
              <div class="det-num">
                <ul class="det-num-list" v-for="item in aboutUs.numDetaiList">
                  <li class="list-cil">
                    <div class="list-tit">{{item.title}}</div>
                    <div class="list-num">
                      <span class="de-num">{{item.num}}</span>
                      <span class="spec">{{item.spec}}</span>
                      <span class="danwei">{{item.danwei}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div class="img-det" v-bind:style="{backgroundImage:'url(' + aboutUs.bacground + ')'}">
            <div class="right">
                <div class="right-det">
                  <div class="right-tit">{{aboutUs.honor}}</div>
                  <div class="inf" v-for="item in aboutUs.honList"><span>•</span>&nbsp;<router-link :to="{name:'newsDetail', params: { title: item.title }}">{{item.title}}</router-link></div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="section">

      <div class="page3" v-bind:style="{backgroundImage:'url(' + news.bacground + ')'}">
        <div class="page3-del">
           <div class="page3-title1">{{news.engTitle}}</div>
          <div class="page3-title2">{{news.chaTitle}}</div>
          <div class="news-list">
            <ul v-for="item in news.newsList">
              <li class="new-item">
                 <div class="data">
                   <div class="data-img">
                     <img style="height: 100%;width: 100%" :src="item.img"/>
                         <div class="data-tit">
                           <router-link :to="{name:'newsDetail', params: { title: item.title }}">{{item.title}}</router-link>
                         </div>
                         <div class="tit-det">
                          {{item.text.substring(0,20)}}
                         </div>
                   </div>
                 </div>
              </li>
            </ul>
          </div>
            <div class="page3-more"><a class="more" :href=news.more>查看更多</a></div>
        </div>
      </div>
    </div>

    <div class="section">
      <div style="width: 100%;height: 100%;background-color: #FFFFFF;">
         <div class="page4">
           <div class="page3-title1">{{team.engTitle}}</div>
           <div class="page3-title2">{{team.chaTitle}}</div>
           <div class="page4-text">{{team.text}}</div>
           <div class="page4-img">
               <img style="width: 100%;height: 100%" :src="team.img"/>
           </div>
           <div class="page3-more"><a class="more" :href=team.href>查看更多</a></div>
         </div>
      </div>
    </div>

    <div class="section">
      <div style="width: 100%;height:100%;">
        <div class="page5-det">
           <ul class="page5-ul">
             <li  class="page5-li" v-for="item in systemList" v-bind:style="{backgroundImage:'url(' + item.backImg + ')'}">
               <div class="page5-data">
                   <div class="page5-icon">
                     <img :src="item.icon"/>
                   </div>
                   <div class="page5-tit">{{item.title}}</div>
                 <div class="line-box">
                   <div class="page5-line"></div>
                 </div>
                 <div class="page5-tip">{{item.star}}</div>
                 <div class="m-box"> <a class="more" href="http://localhost:8080/#/system">查看更多</a></div>
               </div>
               <span class="ceng"></span>
             </li>
           </ul>
        </div>
      </div>
    </div>

    <div class="section" style="width:100%;
  height:100%;
  background-size: 100% 100%" v-bind:style="{backgroundImage:'url(' + map.bacground + ')'}">
      <div class="pag6">
        <div class="page6">
          <div class="page6-tit">
            <div class="pa-t1">{{map.engTitle}}</div>
            <div class="pa-t1">{{map.engTitle1}}</div>
            <div class="pa-t2">{{map.chaTitle}}</div>
            <div class="pa-box"> <a class="more" :href="map.href">联系我们</a></div>
            <div class="pa-t3">
              <div class="pa-t3-t3">{{map.text}}</div>
            </div>
          </div>
          <div class="map"></div>
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
        outIcon:require('@/assets/logo.png'),
        aboutUs:{
          bacground:"",
          engTitle:"",
          chaTitle:"",
          detail:"",
          href:"http://49.232.53.207/#/aboutMe",
          numDetaiList:[],
          honor:"团队荣誉",
          honList:[]
        },
        news:{
          bacground:"",
          engTitle:"",
          chaTitle:"",
          more:"http://49.232.53.207/#/news",
          newsList:[]
        },
        team:{
          engTitle:"",
          chaTitle:"",
          text:"",
          img:"",
           href:"http://49.232.53.207/#/team"
        },
        systemList:[],
        map:{
          engTitle:"",
          engTitle1:"",
          chaTitle:"",
          href:"http://49.232.53.207/#/talentcenter",
          text:"",
          bacground:""
        },
        imgList:[],
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
          css3:true,
          onLeave:function (Link,index) {
            switch (index.index) {
              case 0:
                move(".abouume-detail")
                  .set("top","100px")
                  .duration('1s')
                  .end();
                move(".right")
                  .set("margin-left","0px")
                  .duration('1s')
                  .end();
              case 1:
                move(".abouume-detail")
                  .set("top","0px")
                  .duration('1s')
                  .end();
                move(".right")
                  .set("margin-left","0px")
                  .duration('1s')
                  .end();

                break;
              case 2:
                move(".abouume-detail")
                  .set("top","100px")
                  .duration('1s')
                  .end();
                move(".right")
                  .set("margin-left","100px")
                  .duration('1s')
                  .end();
                break;
              case 3:

                break;
              case 4:
                move(".icon")
                  .set("color","rgba(0, 0, 0, 0.6)")
                  .duration('1s')
                  .end();
                break;
              case 5:
                move(".icon")
                  .set("color","rgba(0, 0, 0, 0)")
                  .duration('1s')
                  .end();
                break;
              default:
                break
            }

          }
        }
      }
    },
    created(){
      this.getScollImg();
      this.getIndexData();
      this.getBlock();
      this.getSystem();
      this.getNews();
      this.getHonor();
    },
    mounted(){
      move(".detail")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
    },

    methods:{
      getHonor(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/news/getNewsTitle.do"
        var data={
          status:2
        }
        this.$axios.post(url,data).then(function (res) {
          vm.aboutUs.honList = res.data.newsBO
        }).catch(function (error) {
          console.log(error)
        })
      },
      getNews(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/news/getNewsTitle.do"
        var data={
          status:1
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.newsBO.length>4){
            for(var i=0;i<4;i++){
              vm.news.newsList.push(res.data.newsBO[i])
            }
          }else{
            vm.news.newsList = res.data.newsBO
          }

        }).catch(function (error) {
          console.log(error)
        })
      },
      getIndexData(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/index/getIndexData.do"
        this.$axios.post(url).then(function (res) {
          vm.aboutUs.bacground=res.data.p2AboutSideImg;
          vm.aboutUs.engTitle=res.data.p2AboutEng;
          vm.aboutUs.chaTitle=res.data.p2AboutCha;
          vm.aboutUs.detail=res.data.p2AboutDetail;
          vm.news.bacground=res.data.p3NewsBackImg;
          vm.news.engTitle=res.data.p3NewsEng;
          vm.news.chaTitle=res.data.p3NewsCha;
          vm.team.engTitle=res.data.p4TeamEng;
          vm.team.chaTitle=res.data.p4TeamCha
          vm.team.text=res.data.p4TeamDetail;
          vm.team.img=res.data.p4TeamImg;
          vm.map.engTitle=res.data.p6Eng;
          vm.map.engTitle1=res.data.p6Eng2;
          vm.map.chaTitle=res.data.p6Cha;
          vm.map.text=res.data.p6Detail;
          vm.map.bacground=res.data.p6Img;
        }).catch(function (error) {
          console.log(error)
        })
      },
      getScollImg(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/index/getIndexImgList.do"
        this.$axios.post(url).then(function (res) {
          console.log(res.data.imgList)
            vm.imgList=res.data.imgList
           vm.$nextTick(function () {
            vm.swiperInit()
          })
        }).catch(function (error) {
          console.log(error)
        })
      },
      getBlock(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/index/getIndexBlock.do"
        this.$axios.post(url).then(function (res) {
          vm.aboutUs.numDetaiList = res.data.blockBO
        }).catch(function (error) {
          console.log(error)
        })
      },
      getSystem(){
        var vm = this;
        var url = "http://49.232.53.207/hhjx/index/getIndexSystem.do"
        this.$axios.post(url).then(function (res) {
           vm.systemList = res.data.sysBO;
        }).catch(function (error) {
          console.log(error)
        })
      },
      swiperInit(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          autoplay:{
            delay:2000
          }
        })
      }
}
  }
</script>
<style scoped src="../../../static/css/indexWin.css"></style>
<style scoped>

  @media screen and (max-width:800px){
    .list{
      display: none;
    }
  }

  </style>
