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
                <a :href="item.src">{{item.title}}</a>
              </div>
              <div class="tit-det">
                {{item.detail}}
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
        news:{
          bacground:"http://www.lpcollege.com/Public/Home/Images/z11.png",
          engTitle:"NEWS CENTER",
          chaTitle:"新闻中心",
          newList:[
            {
              img:"http://www.lpcollege.com/Upload/2019-04-11/1132563669_AUTO.jpg",
              src:"http://47.102.114.47/dist/index.html#/newsDetail",
              title:"共创价值观！朗培教育集团企业文化崭新升级",
              detail:"2014年10月朗培教育集团从成都正"
            }
          ]
        },
        outIcon:require('@/assets/logo.png'),
        numList:[1,2,3,4,5,6,7,8],
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
      }
    },
    mounted(){
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
    }
  }
  </script>
<style scoped src="../../../static/css/news.css"></style>
<style scoped></style>
