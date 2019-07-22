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
                  <div class="inf" v-for="item in aboutUs.honList"><span>•</span>&nbsp;<a :href=item.src>{{item.title}}</a></div>
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
                          <a :href=item.src>{{item.title}}</a>
                         </div>
                         <div class="tit-det">
                          {{item.detail}}
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
             <li  class="page5-li" v-for="item in systemList" v-bind:style="{backgroundImage:'url(' + item.bacground + ')'}">
               <div class="page5-data">
                   <div class="page5-icon">
                     <img :src="item.icon"/>
                   </div>
                   <div class="page5-tit">{{item.title}}</div>
                 <div class="line-box">
                   <div class="page5-line"></div>
                 </div>
                 <div class="page5-tip">{{item.star}}</div>
                 <div class="m-box"> <a class="more" href="http://47.102.114.47/dist/index.html#/system">查看更多</a></div>
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
          bacground:"http://www.lpcollege.com/Public/Home/Images/z9.png",
          engTitle:"ABOUT AS",
          chaTitle:"关于我们",
          detail:"华海聚星集团是一家深耕于民办教育产业，集校长（园长）培训、家庭教育培训、管理咨询、教育产品研发、教育综合体打造、教育产业投资于一体的教育生态型企业。",
          href:"http://47.102.114.47/dist/index.html#/aboutMe",
          numDetaiList:[{
            title:"收入",
            num:"10",
            spec:"万",
            danwei:"元"
          }],
          honor:"团队荣誉",
          honList:[{
            title:"周启智老师荣获新浪教育2018年度教育行业风云人物",
            src:"http://47.102.114.47/dist/index.html#/newsDetail"
          }]
        },
        news:{
          bacground:"http://www.lpcollege.com/Public/Home/Images/z11.png",
          engTitle:"NEWS CENTER",
          chaTitle:"新闻中心",
          more:"http://47.102.114.47/dist/index.html#/news",
          newsList:[
            {
              title:"共创价值观！华海聚星集团企业文化崭新升级",
              detail:" 2014年10月华海聚星集团从成都正",
              src:"http://47.102.114.47/dist/index.html#/newsDetail",
              img:"http://www.lpcollege.com/Upload/2019-04-11/1132563669_AUTO.jpg"
            }
          ]
        },
        team:{
          engTitle:"EXCELLENT TEAM",
          chaTitle:"卓越团队",
          text:"这是一群心怀教育梦想的战斗伙伴，这是一支来自五湖四海的精锐之师，专业、高效、活力、上进是他们的代名词他们有一个共同的名字“华海聚星”",
          img:"http://www.lpcollege.com/Upload/2019-07-12/1251065012_AUTO.jpg",
           href:"http://47.102.114.47/dist/index.html#/team"
        },
        systemList:[{
          icon:"http://www.lpcollege.com/Public/Home/Images/f5/icon1.png",
          title:"华海聚星",
          star:"厚德载物，自强不息",
          bacground:"http://www.lpcollege.com/Public/Home/Images/f5/1.jpg"
        },{
          icon:"http://www.lpcollege.com/Public/Home/Images/f5/icon1.png",
          title:"华海聚星",
          star:"厚德载物，自强不息",
          bacground:"http://www.lpcollege.com/Public/Home/Images/f5/1.jpg"
        },{
          icon:"http://www.lpcollege.com/Public/Home/Images/f5/icon1.png",
          title:"华海聚星",
          star:"厚德载物，自强不息",
          bacground:"http://www.lpcollege.com/Public/Home/Images/f5/1.jpg"
        }],
        map:{
          engTitle:"LANGPEL",
          engTitle1:"EDUCATION",
          chaTitle:"华海聚星•红耀乾坤",
          href:"http://47.102.114.47/dist/index.html#/talentcenter",
          text:"华海聚星集团在全国27个省，37个城市开课近万场 参课人数累计25万人次，帮助近100000所培训学校摆脱运营困境 百万师生、千万家庭因我们而受益",
          bacground:"http://www.lpcollege.com/Public/Home/Images/m10.png"
        },
        imgList:[{
          src:"http://www.lpcollege.com/Upload/2019-07-12/1249174404_AUTO.jpg",
        },{
          src:"http://www.lpcollege.com/Upload/2019-04-15/1418495991_AUTO.jpg"
        },{
          src:"http://www.lpcollege.com/Upload/2019-04-15/1419264829_AUTO.jpg"
        }],
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

    },
    mounted(){
      move(".detail")
        .set("height",window.innerHeight+"px")
        .duration('1s')
        .end();
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
