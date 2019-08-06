<template>
<div class="page3"  v-bind:style="{backgroundImage:'url(' + news.bacground + ')'}">
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
  <div class="page3-del">
    <div class="page3-title1">{{news.engTitle}}</div>
    <div class="page3-title2">{{news.chaTitle}}</div>
    <div class="news-list">
      <ul v-for="item in news.newList">
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
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://49.232.53.207',
        news:{
          bacground:require('@/assets/z11.png'),
          engTitle:"NEWS CENTER",
          chaTitle:"新闻中心",
          newList:[]
        },
        outIcon:require('@/assets/logo.png'),
        numList:[1,2,3,4,5,6,7,8],
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
      }
    },
    mounted(){
      this.getNews();
      move(".page3")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      window.onresize = () => {
        return (() => {
          setTimeout(() => {
            move(".page3")
              .set("height",window.innerHeight+"px")
              .duration('1s')
              .end();
          }, 600)
        })()
      };
    },
    methods:{
      getNews(){
        var vm = this;
        var url = vm.url+"/hhjx/news/getNewsTitle.do"
        var data={
          status:1
        }
        this.$axios.post(url,data).then(function (res) {
          vm.news.newList = res.data.newsBO

        }).catch(function (error) {
          console.log(error)
        })
      },
    }
  }
  </script>
<style scoped src="../../../static/css/news.css"></style>
<style scoped></style>
