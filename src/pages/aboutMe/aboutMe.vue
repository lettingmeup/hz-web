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
        <div class="icon">向下</div>
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
      <div class="img-box" v-for="item in po1.imgList">
        <div class="im1" v-bind:style="{backgroundImage:'url(' + item.img1 + ')'}"></div>
        <div class="im2" v-bind:style="{backgroundImage:'url(' + item.img2 + ')'}"></div>
        <div class="im3" v-bind:style="{backgroundImage:'url(' + item.img3 + ')'}"></div>
        <div class="im4" v-bind:style="{backgroundImage:'url(' + item.img4 + ')'}"></div>
      </div>
    </div>
    <div class="po2">
      <div class="po-t1">{{po2.engTitle}}</div>
      <div class="po-t2">{{po2.chaTitle}}</div>
      <div class="img-box" v-for="item in po2.imgList">
        <div class="im1" v-bind:style="{backgroundImage:'url(' + item.img1 + ')'}"></div>
        <div class="im2" v-bind:style="{backgroundImage:'url(' + item.img2 + ')'}"></div>
        <div class="im3" v-bind:style="{backgroundImage:'url(' + item.img3 + ')'}"></div>
        <div class="im4" v-bind:style="{backgroundImage:'url(' + item.img4 + ')'}"></div>
      </div>
    </div>
    <div class="honor">
      <div class="h-title">
           <div class="h-t-1">{{honor.engTitle}}</div>
           <div class="h-t-2">{{honor.chaTitle}}</div>
      </div>
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
  </div>
</template>
<script>
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        body:{
          engTitle:"HUAHAIJUXING",
          chaTitle:"做一家受客户尊敬的教育生态企业",
          comName:"华海聚星集团",
          bacground:"http://www.lpcollege.com/Upload/2019-04-15/1418495991_AUTO.jpg",
        },
        bo:{
          engTitle:"COMPANY PROFILE",
          chaTitle:"公司简介",
          bacground:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
          text:"我希望起身时，你会轻轻帮我弹掉衣服上不容易发现的灰尘。我希望写字时，手边的茶杯里一直是我喜欢的温度。我希望沉默时，你一言不发在身边我们却不会觉得尴尬。我希望买的鞋子是你渴望的颜色。我希望拨通你电话时你恰好想到我。我希望说早安时你刚好起床。我希望写的书是你欣赏的故事。我希望关灯是你正泛起困意。我希望买的水果你永远觉得是甜的。我希望点的每首歌都是你想唱的。"
        },
        po1:{
          engTitle:"DEVELOPMENT COURSE",
          chaTitle:"发展历程",
          imgList:[{
            img1:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
            img2:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
            img3:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
            img4:"http://www.lpcollege.com/Public/Home/Images/about/a1.png"
          }]
        },
        po2:{
          engTitle:"CORE DATA",
          chaTitle:"核心数据",
          imgList:[{
            img1:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
            img2:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
            img3:"http://www.lpcollege.com/Public/Home/Images/about/a1.png",
            img4:"http://www.lpcollege.com/Public/Home/Images/about/a1.png"
          }]
        },
        honor:{
          engTitle:"GROUP OF HONOR",
          chaTitle:"集团荣誉"
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
        }],
        imgList:[{
          src:"http://www.lpcollege.com/Upload/2019-07-12/1249174404_AUTO.jpg",
        },{
          src:"http://www.lpcollege.com/Upload/2019-04-15/1418495991_AUTO.jpg"
        },{
          src:"http://www.lpcollege.com/Upload/2019-04-15/1419264829_AUTO.jpg"
        }],
      }
    },
    mounted(){
      move(".index")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
      window.onresize = (val) => {
        return (() => {
          this.handleLableWidth(window.innerHeight);
        })()
      };
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay:{
          delay:3000
        }
      })
    },
    methods:{
      check(val){
        alert(val)
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
