<template>
  <div style="overflow-y:scroll; height: 700px">
   联系我们
    <div style="width: 100%;text-align: center">
      <Row type="flex" style="padding-top: 20px">
       qq二维码： <img style="width: 100px;height: 100px" :src="all.qq"/>
        <Upload
          :on-success="getBack"
          action="http://49.232.53.207/hhjx/contact/getQQ.do">
          <Button icon="ios-cloud-upload-outline">更换qq二维码</Button>
        </Upload>
      </Row>
      <Row type="flex" style="padding-top: 20px">
        微信二维码： <img style="width: 100px;height: 100px" :src="all.wechat"/>
        <Upload
          :on-success="getBack"
          action="http://49.232.53.207/hhjx/contact/getWechat.do">
          <Button icon="ios-cloud-upload-outline">更换微信二维码</Button>
        </Upload>
      </Row>
      <Row type="flex" style="padding-top: 20px">
        背景图片：<img style="width: 260px;height: 180px" :src="all.background"/>
        <Upload
          :on-success="getBack"
          action="http://49.232.53.207/hhjx/contact/getBackground.do">
          <Button icon="ios-cloud-upload-outline">更换背景图片</Button>
        </Upload>
      </Row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://49.232.53.207/hhjx',
        all:{},
        column:[],
        table:[]
      }
    },
    beforeCreate(){
      var vm = this;
      var url = "http://49.232.53.207/hhjx/login/getlogin"
      this.$axios.post(url).then(function (res) {
        if(res.data.backCode=="9999"){
          vm.$router.push({
            name: 'Login'
          })
        }
      })
    },
    mounted(){
      this.getData();
    },
    methods:{
      getBack(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success(res.backDesc);
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getData(){
        var vm = this;
        var url = vm.url+"/contact/getContacImgList.do"
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
