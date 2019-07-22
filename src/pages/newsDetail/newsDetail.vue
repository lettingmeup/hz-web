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
          <img :src="item.src"/>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        detail:{
          title:"清风散尽30句，痛到深处皆无语 | 文 三只眼读史",
          textList:[{
            text:"时光越老，人心越淡，独坐一偶，手捧书卷，禅茶一味，心留余香，静守一窗岁月，捡拾时光深处的花开雨落，将这一路的寂寞与欢愉，放逐于岁岁流年。让那些过往的执念，在蓝天白云下舒展，流转，风干，随尘散落天涯。",
            src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3354818446,1257565374&fm=173&app=49&f=JPEG?w=600&h=330&s=498604D25362530308E4C67F0300D077"
          },{
            text:"1、在季节的车上，如果你要提前下车，请别推醒装睡的我，这样我可以沉睡到终点，假装不知道你已经离开。\n" +
              "\n" +
              "2、世事如书，我偏爱你这一句，愿做个逗号，待在你脚边。但你有自己的朗读者，而我只是个摆渡人。\n" +
              "\n" +
              "3、我淋过的最大的雨，是那一天你在烈日下的不回头。\n" +
              "\n" +
              "4、这世界是你的遗嘱，而我是你唯一的遗物。\n" +
              "\n" +
              "5、我希望有个如你一般的人，如山间清爽的风，如古城温暖的光，从清晨到夜晚，由山野到书房，只要最后是你，就好。\n" +
              "\n",
            src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=149755711,1266092528&fm=173&app=49&f=JPEG?w=600&h=330&s=34A869F8D2FB059A96B1361E0300C0D4"
          },{
            text:"6、故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。\n" +
              "\n" +
              "7、有些人藏在心里，有些人脱口而出。也许有人曾静静看着你：可不可以等等我，等我幡然醒悟，等我明辨是非，等我说服自己，等我爬出悬崖，等我缝好胸腔来看你。\n" +
              "\n" +
              "8、我们在年少时并不知道，有些乐章，一旦开始，唱得就是曲终人散。\n" +
              "\n" +
              "9、你如果想念一个人就会变成微风，轻轻掠过他的身边。就算他感觉不到，可这就是你全部的努力。人生就是这样子，每个人都变成各自想念的风。\n" +
              "\n" +
              "10、与其怀念,不如向往,与其向往,不如该放就放去远方。",
            src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=113903932,496906790&fm=173&app=49&f=JPEG?w=600&h=330&s=F190359D72310380040C09B60300E081"
          },{
            text:"11、我希望和你在一起，如果不可以，那我就在你看不见的地方，永远陪着你。\n" +
              "\n" +
              "12、黄昏开始书写，黎明是无数的扉页。全世界拼成首诗，我爱你当作最后一行。\n" +
              "\n" +
              "13、如果你不往前走，就会被沙子掩埋。所以我们泪流满面，步步回头，可是只能往前走。\n" +
              "\n" +
              "14、没有很好的机会和你说再见，以后再也见不到你。比幸福更悲伤，比相聚更遥远，比坚强更脆弱，比离开更安静。\n" +
              "\n" +
              "15、其实总有一段路，你是会一边哭着一边走完。",
            src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2589114835,393823331&fm=173&app=49&f=JPEG?w=600&h=329&s=93C0A6E30802205718E0653F03001047"
          }]
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
    mounted(){

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

    }
  }
  </script>
<style scoped src="../../../static/css/newsDetail.css"></style>
<style scoped>

</style>
