<template>
  <div style="overflow-y:scroll; height: 700px">
   关于我们主数据
    <div style="padding: 50px 200px 200px 100px">
      <div style="background: lightyellow">
        <div>关于我们数据</div>
        <Row type="flex">
          <Col>
            标题（英语）：<Input :disabled="disable"   style="width: 200px" placeholder="default size" v-model="all.p1Eng"></Input>
          </Col>
          <Col>
            标题（汉语）： <Input :disabled="disable" style="width: 200px" placeholder="default size" v-model="all.p1Cha"></Input>
          </Col >
        </Row>
        <Row type="flex" style="padding-top: 20px">
          背景图：<img style="width: 80px;height: 100px" :src="all.p1Img"/>
          <Upload
            v-show="upshow"
            :on-success="getBack1"
            action="http://49.232.53.207/hhjx/index/p6Img.do">
            <Button icon="ios-cloud-upload-outline">更换图片</Button>
          </Upload>
        </Row>
        <div>公司简介</div>
        <Row type="flex" style="padding-top: 20px">
          <Col>
            标题（英语）：<Input :disabled="disable"   style="width: 200px" placeholder="default size" v-model="all.p2Eng"></Input>
          </Col>
          <Col>
            标题（汉语）： <Input :disabled="disable" style="width: 200px" placeholder="default size" v-model="all.p2Cha"></Input>
          </Col >
        </Row>
        <Row type="flex" style="padding-top: 20px">
        简介：<Input :disabled="disable" style="width: 200px" type="textarea" :rows="4" v-model="all.p2Detail"></Input>
        </Row>
        <Row type="flex" style="padding-top: 20px">
          背景图：<img style="width: 80px;height: 100px" :src="all.peImg"/>
          <Upload
            v-show="upshow"
            :on-success="getBack2"
            action="http://49.232.53.207/hhjx/index/p6Img.do">
            <Button icon="ios-cloud-upload-outline">更换图片</Button>
          </Upload>
        </Row>
        <Button @click="edit" type="primary">编辑</Button>
        <Button @click="back" type="error">取消</Button>
        <Button @click="conmit" type="info">提交</Button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://www.hhjxedu.com/hhjx',
        disable:true,
        upshow:false,
        all:{}
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
    mounted(){
      this.getImg();
    },
    methods:{
      edit(){
        this.disable=false
          this.upshow=true
      },
      back(){
        this.disable=true
        this.upshow=false
        this.getImg();
      },
      conmit(){
        var vm = this;
        var url = vm.url+"/aboutMe/update.do"
        var data = {
          id: vm.all.id,
          p1Cha:vm.all.p1Cha,
          p1Eng:vm.all.p1Eng,
          p1Img:vm.all.p1Img,
          p2Cha:vm.all.p2Cha,
          p2Detail:vm.all.p2Detail,
          p2Eng:vm.all.p2Eng,
          peImg:vm.all.peImg
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.getImg()
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      getBack1(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          vm.all.p1Img = "http://www.hhjxedu.com/imgs/"+res.backDesc;
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getBack2(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          vm.all.peImg = "http://www.hhjxedu.com/imgs/"+res.backDesc;
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getImg(){
        var vm = this;
        var url = vm.url+"/aboutMe/getAboutMeData.do"
        this.$axios.post(url).then(function (res) {
             if(res.data.backCode=="0000"){
               vm.all = res.data
             }else{
               vm.$Message.error(res.data.backDesc);
             }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      }
    }
  }
</script>
