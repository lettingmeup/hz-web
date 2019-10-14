<template>
  <div style="overflow-y:scroll; height: 700px" >
    发展
    <div style="width: 100%">
      <Table height="500" border :columns="columnde"  :data="tablede"></Table>
    </div>
    <div v-show="upShow"style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: fixed;z-index:100;top: 30px;left: 200px" >
      <img style="height: 300px;width: 260px;" :src="upData.img"/>
      <Upload
        :on-success="getBack"
        action="http://www.hhjxedu.com/hhjx/index/p6Img.do">
        <Button icon="ios-cloud-upload-outline">上传轮播图</Button>
      </Upload>
      <Button @click="submit">提交</Button>
      <Button @click="no" type="error">取消</Button>
    </div>
    主要数据
    <div style="width: 100%">
      <Table height="500" border :columns="columnsda"  :data="tableda"></Table>
    </div>
    <div style="height: 200px;"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://www.hhjxedu.com/hhjx',
        upData:{
          id:'',
          img:''
        },
        upShow:false,
        columnde:[
          {
            title:'图片',
            width:300,
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
          },
          {
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
                      this.delete(params.row.id)
                    }
                  }
                }, '更换')
              ]);
            }
          }
        ],
        tablede:[],
        columnsda:[
          {
            title:'图片',
            width:300,
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
          },
          {
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
                      this.delete(params.row.id)
                    }
                  }
                }, '更换')
              ]);
            }
          }
        ],
        tableda:[]
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
      this.getDe();
      this.getDa();
    },
    methods:{
      submit(){
        var vm = this;
        var url = vm.url+"/aboutMe/updateDep.do"
        this.$axios.post(url,vm.upData).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.upData.id=''
            vm.upData.img=''
            vm.upShow = false
            vm.getDa()
            vm.getDe()
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
        this.upData.id=''
        this.upData.img=''
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
      getDe(){
        var vm = this;
        var url = vm.url+"/aboutMe/getAboutDep.do"
        var data={
          type:1
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.tablede = res.data.list
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      delete(val){
            this.upShow = true
            this.upData.id = val
      },
      getDa(){
        var vm = this;
        var url = vm.url+"/aboutMe/getAboutDep.do"
        var data={
          type:2
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
                vm.tableda = res.data.list
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
