<template>
  <div style="overflow-y:scroll; height: 700px">
  部门
    <div style="width: 100%">
      <Table height="500" border :columns="column"  :data="table"></Table>
    </div>
    <div v-show="upShow"style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: fixed;z-index:100;top: 30px;left: 200px" >
      <img style="width: 200px" :src="upData.img"/>
      <Upload
        :on-success="getBack"
        action="http://www.hhjxedu.com/hhjx/index/sideImg.do">
        <Button icon="ios-cloud-upload-outline">更换部门背景图片</Button>
      </Upload>
      部门名称：<Input  style="width: 200px" placeholder="default size" v-model="upData.name"></Input>
      部门介绍：<Input   style="width: 200px" placeholder="default size" v-model="upData.detail"></Input>
      <Button @click="submit">提交</Button>
      <Button @click="no" type="error">取消</Button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://www.hhjxedu.com/hhjx',
        upData:{},
        upShow:false,
        column:[{
          title:'背景图片',
          minWidth:200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('img', {
                  attrs:{
                    src:params.row.img,
                    style: 'width: 200px;height:110px'
                  }
                },
              ),
            ]);
          }
        },{
          title:'部门名称',
          minWidth:200,
          align: 'center',
          key:'name'
        },{
        title:'部门介绍',
          minWidth:200,
          align: 'center',
          key:'detail'
      },{
          title:'操作',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.delete(params.row)
                  }
                }
              }, '修改')
            ]);
          }
        }],
        table:[]
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
      this.geyData();
    },
    methods:{
      submit(){
       console.log(this.upData)
        var vm = this;
        var url = vm.url+"/telent/updateTelent.do"
        this.$axios.post(url,vm.upData).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.upShow = false
            vm.geyData();
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      no(){
        this.upShow = false
        this.geyData();
      },
      getBack(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          vm.upData.img = "http://www.hhjxedu.com/imgs/"+res.backDesc
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      delete(val){
        this.upShow = true;
        this.upData = val
      },
      geyData(){
        var vm = this;
        var url = vm.url+"/telent/getTelent.do"
        this.$axios.post(url).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.table = res.data.list
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
