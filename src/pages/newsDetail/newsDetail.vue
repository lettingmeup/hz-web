<template>
  <div class="body">
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
    <div class="news-detail">
     <h3>{{detail.title}}</h3>
      <div class="de-line"></div>
      <div class="count" v-for="item in detail.textList">
          <p>{{item.text}}</p>
          <img :src="item.img"/>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        url:'http://49.232.53.207',
        detail:{
          title:this.$route.params.title,
          textList:[]
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
    mounted(){
         this.getDetail();
        console.log(this.$route.params.title)
        move(".body")
          .set("height",window.innerHeight+"px")
          .duration('1s')
          .end();
        window.onresize = () => {
          return (() => {
            setTimeout(() => {
              move(".body")
                .set("height",window.innerHeight+"px")
                .duration('1s')
                .end();
            }, 600)
          })()
        };
    },
    methods:{
      getDetail(){
        var vm = this;
        var url = vm.url+"/hhjx/news/getNewsByTitle.do"
        var data={
          title:this.$route.params.title
        }
        this.$axios.post(url,data).then(function (res) {
          vm.detail.title = res.data.newsBO[0].title
          vm.detail.textList = res.data.newsBO
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
  </script>
<style scoped src="../../../static/css/newsDetail.css"></style>
<style scoped>

</style>
