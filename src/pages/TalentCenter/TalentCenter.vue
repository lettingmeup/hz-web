<template>
  <div class="talentcenter">
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
    <div id="talent" style="width: 100%;height: 1400px;" v-bind:style="{backgroundImage:'url(' + talent.bacground + ')'}">
      <!--第1-3模块-->
      <div class="group1">
        <div class="module1" v-bind:style="{backgroundImage:'url(' + talent.module1.bacground + ')'}">
          <div class="m-title">{{talent.module1.title}}</div>
          <div class="mask">{{talent.module1.text}}</div>
        </div>
        <div class="module2" v-bind:style="{backgroundImage:'url(' + talent.module2.bacground + ')'}">
          <div class="m-title">{{talent.module2.title}}</div>
          <div class="mask">{{talent.module2.text}}</div>
        </div>
        <div class="module3" v-bind:style="{backgroundImage:'url(' + talent.module3.bacground + ')'}">
          <div class="m-title">{{talent.module3.title}}</div>
          <div class="mask">{{talent.module3.text}}</div>
        </div>
      </div>
      <!--第4-6模块-->
      <div class="group2">
        <div class="module4" v-bind:style="{backgroundImage:'url(' + talent.module4.bacground + ')'}">
          <div class="m-title">{{talent.module4.title}}</div>
          <div class="mask">{{talent.module4.text}}</div>
        </div>
        <div class="module5" v-bind:style="{backgroundImage:'url(' + talent.module5.bacground + ')'}">
          <div class="m-title">{{talent.module5.title}}</div>
          <div class="mask">{{talent.module5.text}}</div>
        </div>
        <div class="module6" v-bind:style="{backgroundImage:'url(' + talent.module6.bacground + ')'}">
          <div class="m-title">{{talent.module6.title}}</div>
          <div class="mask">{{talent.module6.text}}</div>
        </div>
      </div>
      <!--第7-9模块-->
      <div class="group3">
        <div class="module7" v-bind:style="{backgroundImage:'url(' + talent.module7.bacground + ')'}">
          <div class="m-title">{{talent.module7.title}}</div>
          <div class="mask">{{talent.module7.text}}</div>
        </div>
        <div class="module8">
          <a :href="talent.href"><img :src="talent.img"></a>
        </div>
        <div class="module9" v-bind:style="{backgroundImage:'url(' + talent.module8.bacground + ')'}">
          <div class="m-title">{{talent.module8.title}}</div>
          <div class="mask">{{talent.module8.text}}</div>
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
        talent:{
          img:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png",
          href:"http://47.102.114.47/dist/index.html#/contactus",
          bacground:"http://www.lpcollege.com/Public/Home/Images/z30.png",
          module1:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module2:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module3:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module4:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module5:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module6:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module7:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          },
          module8:{
            title:"部门",
            text:"描述",
            bacground:"http://www.lpcollege.com/Public/Home/Images/talent/t13.png"
          }
        },
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
    created(){

    },
    mounted(){
      //背景根据窗口大小自适应
      move(".talentcenter")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      // move("#talent")
      //   .set("height",window.innerHeight+"px")
      //   .duration('1s')
      //   .end();
      window.onresize = () => {
        return (() => {
          setTimeout(() => {
            move(".talentcenter")
              .set("height",window.innerHeight+"px")
              .duration('1s')
              .end();
            // move("#talent")
            //   .set("height",window.innerHeight+"px")
            //   .duration('1s')
            //   .end();
          }, 600)
        })()
      };
    },
    methods:{

    }
  }
</script>
<style scoped src="../../../static/css/talentcenter.css"></style>
