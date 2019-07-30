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
        <div class="module1" v-bind:style="{backgroundImage:'url(' + talent.module1.img + ')'}">
          <div class="m-title">{{talent.module1.name}}</div>
          <div class="mask">{{talent.module1.detail}}</div>
        </div>
        <div class="module2" v-bind:style="{backgroundImage:'url(' + talent.module2.img + ')'}">
          <div class="m-title">{{talent.module2.name}}</div>
          <div class="mask">{{talent.module2.detail}}</div>
        </div>
        <div class="module3" v-bind:style="{backgroundImage:'url(' + talent.module3.img + ')'}">
          <div class="m-title">{{talent.module3.name}}</div>
          <div class="mask">{{talent.module3.detail}}</div>
        </div>
      </div>
      <!--第4-6模块-->
      <div class="group2">
        <div class="module4" v-bind:style="{backgroundImage:'url(' + talent.module4.img + ')'}">
          <div class="m-title">{{talent.module4.name}}</div>
          <div class="mask">{{talent.module4.detail}}</div>
        </div>
        <div class="module5" v-bind:style="{backgroundImage:'url(' + talent.module5.img + ')'}">
          <div class="m-title">{{talent.module5.name}}</div>
          <div class="mask">{{talent.module5.detail}}</div>
        </div>
        <div class="module6" v-bind:style="{backgroundImage:'url(' + talent.module6.img + ')'}">
          <div class="m-title">{{talent.module6.name}}</div>
          <div class="mask">{{talent.module6.detail}}</div>
        </div>
      </div>
      <!--第7-9模块-->
      <div class="group3">
        <div class="module7" v-bind:style="{backgroundImage:'url(' + talent.module7.img + ')'}">
          <div class="m-title">{{talent.module7.name}}</div>
          <div class="mask">{{talent.module7.detail}}</div>
        </div>
        <div class="module8">
          <a :href="talent.href"><img :src="talent.img"></a>
        </div>
        <div class="module9" v-bind:style="{backgroundImage:'url(' + talent.module8.img + ')'}">
          <div class="m-title">{{talent.module8.name}}</div>
          <div class="mask">{{talent.module8.detail}}</div>
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
          img:require('@/assets/t13.png'),
          href:"http://localhost:8080/#/contactus",
          bacground:"http://www.lpcollege.com/Public/Home/Images/z30.png",
          module1:{},
          module2:{},
          module3:{},
          module4:{},
          module5:{},
          module6:{},
          module7:{},
          module8:{}
        },
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
        }]
      }
    },
    created(){

    },
    mounted(){
      this.getTelent();
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
         getTelent(){
           var vm = this;
           var url = "http://49.232.53.207/hhjx/telent/getTelent.do"
           this.$axios.post(url).then(function (res) {
             vm.talent.module1 = res.data.list[0]
             vm.talent.module2 = res.data.list[1]
             vm.talent.module3 = res.data.list[2]
             vm.talent.module4 = res.data.list[3]
             vm.talent.module5 = res.data.list[4]
             vm.talent.module6 = res.data.list[5]
             vm.talent.module7 = res.data.list[6]
             vm.talent.module8 = res.data.list[7]

           }).catch(function (error) {
             console.log(error)
           })
         }
    }
  }
</script>
<style scoped src="../../../static/css/talentcenter.css"></style>
