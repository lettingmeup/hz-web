<template>
  <div style="overflow-y:scroll; height: 700px">
  团队
    <Button @click="addNew">新增老师</Button>
    <div style="width: 100%">
      <Table height="500" border :columns="column"  :data="table"></Table>
    </div>
    <div v-show="upShow"style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: fixed;z-index:100;top: 30px;left: 200px" >
      <img :src="upData.img"/>
      <Upload
        :on-success="getBack"
        action="http://www.hhjxedu.com/hhjx/index/sideImg.do">
        <Button icon="ios-cloud-upload-outline">上传老师照片</Button>
      </Upload>
      选择负责课程：<Select v-model="upData.sysFaId" style="width:200px">
        <Option v-for="item in faList" :value="item.id" :key="item.id">{{ item.cha }}</Option>
      </Select>
      <Button @click="submit">提交</Button>
      <Button @click="no" type="error">取消</Button>
    </div>
    <div>
      团队照片
      <div class="img-box">
        <img style="height: 100%;width: 100%" :src="teamImg"/>
        <Upload
          :on-success="getBack1"
          action="http://www.hhjxedu.com/hhjx/team/teamImg.do">
          <Button icon="ios-cloud-upload-outline">更换团队照片</Button>
        </Upload>
      </div>
      <div style="height: 200px"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://www.hhjxedu.com/hhjx',
        upData:{
          img:'',
          sysFaId:''
      },
        teamImg:'',
        faList:[],
        upShow:false,
        column:[{
          title:'老师照片',
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
            title:'负责课程',
            align: 'center',
            key:'cha'
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
                }, '删除')
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
      this.getImg();
      this.getTeam();
    },
    methods:{
      submit(){
        var vm = this;
        var url = vm.url+"/team/addMate.do"
        this.$axios.post(url,vm.upData).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.upData.sysFaId=''
            vm.upData.img=''
            vm.upShow = false
            vm.getImg();
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
        this.upData.sysFaId = ''
        this.upData.img = ''
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
      getTeam(){
        var vm = this;
        var url = vm.url+"/team/getTeamImg.do"
        this.$axios.post(url).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.teamImg = res.data.img
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      addNew(){
        this.upShow = true
        var vm = this;
        var url = vm.url+"/system/getFaData.do"
        this.$axios.post(url).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.faList = res.data.listBo
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        })
      },
      getImg(){
        var vm = this;
        var url = vm.url+"/team/getAll.do"
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
      },
      getBack1(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          vm.getTeam()
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      delete(val){
        var vm = this;
        var url = vm.url+"/team/delMate.do"
        var data={
          id:val
        }
        this.$axios.post(url,data).then(function (res) {
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
      }
    }
  }
</script>
<style scoped>
  .img-box{
    width: 700px;
  }
</style>
