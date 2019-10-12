<template>
  <div style="overflow-y:scroll; height: 700px">
    主页数据
    <div style="padding: 50px 200px 200px 100px">

      <div style="background: lightyellow">
        <div>关于我们数据</div>
        <Row type="flex">
          <Col>
            标题（英语）：<Input :disabled="disable"   style="width: 200px" placeholder="default size" v-model="all.p2AboutEng"></Input>
          </Col>
          <Col>
            标题（汉语）： <Input :disabled="disable" style="width: 200px" placeholder="default size" v-model="all.p2AboutCha"></Input>
          </Col >
        </Row>
        <Row type="flex" style="padding-top: 20px">
          <Col>
            详情：<Input :disabled="disable" style="width: 200px" type="textarea" :rows="4" v-model="all.p2AboutDetail"></Input>
          </Col>
          <Col >
            侧边图：<img style="width: 80px;height: 100px" :src="all.p2AboutSideImg"/>
            <Upload v-show="upshow"
              :on-success="getBack1"
              action="http://www.hhjxedu.com/hhjx/index/sideImg.do">
              <Button icon="ios-cloud-upload-outline">更换图片</Button>
            </Upload>
          </Col>
        </Row>
      </div>
      <div style="height: 2px;width: 100%;background: black"></div>
      <div style="background: lightyellow">
        <div>新闻数据</div>
        <Row type="flex" style="padding-top: 20px">
          <Col>
            标题（英语）：<Input :disabled="disable" style="width: 200px" placeholder="default size"  v-model="all.p3NewsEng"></Input>
          </Col>
          <Col>
            标题（汉语）：<Input :disabled="disable" style="width: 200px" placeholder="default size"  v-model="all.p3NewsCha"></Input>
          </Col>
        </Row>
        <Row>
          <Col>
            背景图：<img style="width: 110px;height: 90px" :src="all.p3NewsBackImg"/>
            <Upload
              v-show="upshow"
              :on-success="getBack2"
              action="http://www.hhjxedu.com/hhjx/index/newsBacImg.do">
              <Button icon="ios-cloud-upload-outline">更换图片</Button>
            </Upload>
          </Col>
        </Row>
      </div>
      <div style="height: 2px;width: 100%;background: black"></div>
      <div style="background: lightyellow">
        <Row type="flex" style="padding-top: 20px">
          <Col>
            标题（英语）：<Input :disabled="disable" style="width: 200px" placeholder="default size"  v-model="all.p4TeamEng"></Input>
          </Col>
          <Col>
            标题（汉语）：<Input :disabled="disable" style="width: 200px" placeholder="default size"  v-model="all.p4TeamCha"></Input>
          </Col>
        </Row>
        <Row>
          <Col>
            详情：<Input :disabled="disable" style="width: 200px" type="textarea" :rows="4"  v-model="all.p4TeamDetail"></Input>
          </Col>
          <Col>
            背景图：<img style="width: 110px;height: 90px" :src="all.p4TeamImg"/>
            <Upload
              v-show="upshow"
              :on-success="getBack3"
              action="http://www.hhjxedu.com/hhjx/index/newsBacImg.do">
              <Button icon="ios-cloud-upload-outline">更换图片</Button>
            </Upload>
          </Col>
        </Row>
      </div>
      <div style="height: 2px;width: 100%;background: black"></div>
      <div style="background: lightyellow">
        <Row type="flex" style="padding-top: 20px">
          <Col>
            主标题（英语）：<Input :disabled="disable" style="width: 200px" placeholder="default size" v-model="all.p6Eng"></Input>
          </Col>
          <Col>
            副标题（英语）： <Input :disabled="disable" style="width: 200px" placeholder="default size"  v-model="all.p6Eng2"></Input>
          </Col>
          <Col>
            标题（汉语）：<Input :disabled="disable" style="width: 200px" placeholder="default size"  v-model="all.p6Cha"></Input>
          </Col>
        </Row>
        <Row type="flex" style="padding-top: 20px">
          <Col>
            详情：<Input :disabled="disable" type="textarea" :rows="4" v-model="all.p6Detail"></Input>
          </Col>
          <Col>
            背景图：<img style="width: 110px;height: 90px" :src="all.p6Img"/>
            <Upload
              v-show="upshow"
              :on-success="getBack4"
              action="http://www.hhjxedu.com/hhjx/index/p6Img.do">
              <Button icon="ios-cloud-upload-outline">更换图片</Button>
            </Upload>
          </Col>
        </Row>
      </div>
      <Button @click="edit" type="primary">编辑</Button>
      <Button @click="back" type="error">取消</Button>
      <Button @click="conmit" type="info">提交</Button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://www.hhjxedu.com/hhjx',
        all:{},
        disable:true,
        upshow:false
      }
    },
    beforeCreate(){
      var vm = this;
      var url = "http://www.hhjxedu.com/hhjx/login/getlogin"
      this.$axios.post(url).then(function (res) {
        if(res.data.backCode=="9999"){
          vm.$router.push({
            name: 'Login'
          })
        }
      })
    },
    created(){
      this.getImg();
    },
    methods: {
      getImg() {
        var vm = this;
        var url = vm.url+"/index/getIndexData.do"
        this.$axios.post(url).then(function (res) {
          vm.all = res.data
        }).catch(function (error) {
          console.log(error)
        })
      },
      edit(){
        this.disable= false
        this.upshow=true
      },
      back(){
        this.disable= true;
        this.upshow=false
        this.getImg();
      },
      conmit(){
        var vm = this;
        var url = vm.url+"/index/updateIndexData.do"
        this.$axios.post(url,vm.all).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.getImg();
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      getBack1(res, file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          this.all.p2AboutSideImg = "http://www.hhjxedu.com/imgs/"+res.backDesc;
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getBack2(res, file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          this.all.p3NewsBackImg = "http://www.hhjxedu.com/imgs/"+res.backDesc;
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getBack3(res, file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          this.all.p4TeamImg = "http://www.hhjxedu.com/imgs/"+res.backDesc;
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getBack4(res, file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          this.all.p6Img = "http://www.hhjxedu.com/imgs/"+res.backDesc;
        }else{
          vm.$Message.error(res.backDesc);
        }
      }
    }
  }
</script>
