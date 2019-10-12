<template>
  <div>
    关于我们轮播图
    <div class="table" style="text-align: center;top: 50px;padding-left: 100px;padding-right: 100px">
      <Table height="500" width="600" border :columns="columns"  :data="table"></Table>
      <Button  style="position: absolute;top: 100px;right: 200px" @click="addImg">上传轮播图</Button>
    </div>
    <div v-show="upShow"style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: absolute;top: 30px;left: 200px" >
      <img :src="add.img"/>
      <Upload
        :on-success="getBack"
        action="http://49.232.53.207/hhjx/index/p6Img.do">
        <Button icon="ios-cloud-upload-outline">上传轮播图</Button>
      </Upload>
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
        add:{
          img:''
        },
        upShow:false,
        columns:[{
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
      this.getImg()
    },
    methods:{
      submit(){
        var vm = this;
        var url = vm.url+"/aboutMe/insert.do"
        var data = {
          img:vm.add.img
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.add.img = ""
            vm.upShow =false
            vm.getImg()
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      no(){
        this.upShow = false;
        this.add.img = ""
      },
      addImg(){
        this.upShow = true;
      },
      getImg(){
        var vm = this;
        var url = vm.url+"/aboutMe/getAboutScoll.do"
        this.$axios.post(url).then(function (res) {
          vm.table=res.data.scollList
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      getBack(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          vm.add.img = "http://www.hhjxedu.com/imgs/"+res.backDesc
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      delete(val){
        var vm = this;
        var url = vm.url+"/aboutMe/delete.do"
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
