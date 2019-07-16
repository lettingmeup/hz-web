<template>
  <div class="index">
  <div id="head">
    <div class="container">
        <img class="logo" :src="outIcon"/>
    </div>
    <div class="list">
           <ul class="tit-list" v-for="item in titleList">
             <li class="tit"><a class="hr" href="index.vue">{{item.name}}</a><i class="line"></i></li>
           </ul>
    </div>
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
          <div class="detail" style="width: 64%">
            <div class="t1">ABOUT AS</div>
            <div class="t2">关于我们</div>
            <div class="t3">{{aboutUs}}</div>
            <div class="t4">
              <div class="t4-cl"><a class="more" href="index.vue">查看更多</a></div>
            </div>
            <div class="det-num">
                   <ul class="det-num-list" v-for="item in numList">
                     <li class="list-cil">
                         <div class="list-tit">累计助力培训学校创收</div>
                         <div class="list-num">
                            <span class="de-num">55</span>
                            <span class="spec">万</span>
                            <span class="danwei">元</span>
                         </div>
                     </li>
                   </ul>
            </div>
          </div>
        <div class="img-det" style="width: 36%;height: 100%;">
            <img style="height: 100%;width: 100%" src="http://www.lpcollege.com/Public/Home/Images/z9.png"/>
            <div class="right">
                <div class="right-det">
                  <div class="right-tit">集团荣誉</div>
                  <div class="inf"><span>•</span>&nbsp;<a href="index.vue">周启智老师荣获新浪教育2018年度教育行业风云人物</a></div>
                  <div class="inf"><span>•</span>&nbsp;<a href="index.vue">周启智老师荣获新浪教育2018年度教育行业风云人物</a></div>
                  <div class="inf"><span>•</span>&nbsp;<a href="index.vue">周启智老师荣获新浪教育2018年度教育行业风云人物</a></div>
                  <div class="inf"><span>•</span>&nbsp;<a href="index.vue">周启智老师荣获新浪教育2018年度教育行业风云人物</a></div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="section">

      <div class="page3">
        <div class="page3-del">
           <div class="page3-title1">NEWS CENTER</div>
          <div class="page3-title2">新闻中心</div>
          <div class="news-list">
            <ul v-for="item in numList">
              <li class="new-item">
                 <div class="data">
                   <div class="data-img">
                     <img style="height: 100%;width: 100%" src="http://www.lpcollege.com/Upload/2019-04-11/1132563669_AUTO.jpg"/>

                         <div class="data-tit">
                          <a href="index.vue">共创价值观！朗培教育集团企业文化崭新升级</a>
                         </div>
                         <div class="tit-det">
                           2014年10月朗培教育集团从成都正
                         </div>
                   </div>
                 </div>
              </li>
            </ul>
          </div>
            <div class="page3-more"><a class="more" href="index.vue">查看更多</a></div>
        </div>
      </div>
    </div>

    <div class="section">
      <div style="width: 100%;height: 100%;background-color: #FFFFFF;">
         <div class="page4">
           <div class="page3-title1">EXCELLENT TEAM</div>
           <div class="page3-title2">卓越团队</div>
           <div class="page4-text">这是一群心怀教育梦想的战斗伙伴，这是一支来自五湖四海的精锐之师，专业、高效、活力、上进是他们的代名词
             他们有一个共同的名字“朗培人”</div>
           <div class="page4-img">
               <img style="width: 100%;height: 100%" src="http://www.lpcollege.com/Upload/2019-07-12/1251065012_AUTO.jpg"/>
           </div>
           <div class="page3-more"><a class="more" href="index.vue">查看更多</a></div>
         </div>
      </div>
    </div>

    <div class="section">
      <div style="width: 100%;height:100%;">
        <div class="page5-det">
           <ul class="page5-ul">
             <li  class="page5-li">
               <div class="page5-data">
                   <div class="page5-icon">
                     <img src="http://www.lpcollege.com/Public/Home/Images/f5/icon1.png"/>
                   </div>
                   <div class="page5-tit">南阳理工学院</div>
                 <div class="line-box">
                   <div class="page5-line"></div>
                 </div>
                 <div class="page5-tip">厚德载物，自强不息</div>
                 <div class="m-box"> <a class="more" href="index.vue">查看更多</a></div>
               </div>
               <span class="ceng"></span>
             </li>
             <li  class="page5-li">
               <div class="page5-data">
                 <div class="page5-icon">
                   <img src="http://www.lpcollege.com/Public/Home/Images/f5/icon2.png"/>
                 </div>
                 <div class="page5-tit">南阳理工学院</div>
                 <div class="line-box">
                   <div class="page5-line"></div>
                 </div>
                 <div class="page5-tip">厚德载物，自强不息</div>
                 <div class="m-box"> <a class="more" href="index.vue">查看更多</a></div>
               </div>
               <span class="ceng"></span>
             </li>
             <li  class="page5-li">
               <div class="page5-data">
                 <div class="page5-icon">
                   <img src="http://www.lpcollege.com/Public/Home/Images/f5/icon3.png"/>
                 </div>
                 <div class="page5-tit">南阳理工学院</div>
                 <div class="line-box">
                   <div class="page5-line"></div>
                 </div>
                 <div class="page5-tip">厚德载物，自强不息</div>
                 <div class="m-box"> <a class="more" href="index.vue">查看更多</a></div>
               </div>
               <span class="ceng"></span>
             </li>
           </ul>
        </div>
      </div>
    </div>

    <div class="section" style="width:100%;
  height:100%;
  background-image: url('http://www.lpcollege.com/Public/Home/Images/m10.png');
  background-size: 100% 100%">
      <div class="pag6">
        <div class="page6">
          <div class="page6-tit">
            <div class="pa-t1">LANGPEL</div>
            <div class="pa-t1">EDUCATION</div>
            <div class="pa-t2">朗培红•红耀乾坤</div>
            <div class="pa-box"> <a class="more" href="index.vue">联系我们</a></div>
            <div class="pa-t3">
              <div class="pa-t3-t3">朗培教育集团在全国27个省，37个城市开课近万场</div>
              <div class="pa-t3-t3">参课人数累计25万人次，帮助近100000所培训学校摆脱运营困境</div>
              <div class="pa-t3-t3">百万师生、千万家庭因我们而受益</div>
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
        aboutUs:"华海聚星集团是一家深耕于民办教育产业，集校长（园长）培训、家庭教育培训、管理咨询、教育产品研发、教育综合体打造、教育产业投资于一体的教育生态型企业。",
        options:{
          navigation: true,
          scrollingSpeed:500,
          navigationPosition:"left",
          css3:true,
          onLeave:function (Link,index) {
            switch (index.index) {
              case 0:
                move(".detail")
                  .set("padding-top","350px")
                  .duration('1s')
                  .end();
                move(".right")
                  .set("margin-left","100px")
                  .duration('1s')
                  .end();
              case 1:
                move(".detail")
                  .set("padding-top","200px")
                  .duration('1s')
                  .end();
                move(".right")
                  .set("margin-left","0px")
                  .duration('1s')
                  .end();

                break;
              case 2:

                move(".detail")
                  .set("padding-top","350px")
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
                break;
              case 5:
                break;
              default:
                break
            }

          }
        },
        outIcon:require('@/assets/logo.png'),
        imgList:[{
          src:"http://www.lpcollege.com/Upload/2019-07-12/1249174404_AUTO.jpg",
        },{
          src:"http://www.lpcollege.com/Upload/2019-04-15/1418495991_AUTO.jpg"
        },{
          src:"http://www.lpcollege.com/Upload/2019-04-15/1419264829_AUTO.jpg"
        }],
        titleList:[{
          name:"首页"
        },{
          name:"关于我们"
        },{
          name:"课程体系"
        },{
          name:"卓越团队"
        },{
          name:"人才中心"
        },{
          name:"联系我们"
        }],
        numList:[1,2,3,4]
      }
    },
    created(){

    },
    mounted(){
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
<style src="../../../static/css/indexWin.css"></style>
<style scoped>

  @media screen and (max-width:800px){
    .list{
      display: none;
    }
  }

  </style>
