<template>
  <div>
    主页轮播图
    <div class="table" style="text-align: center;top: 50px;padding-left: 100px;padding-right: 100px">
      <Table height="500" width="600" border :columns="columns"  :data="table"></Table>
      <Upload
        style="position: absolute;top: 100px;right: 200px"
        :on-success="getBack"
        action="http://www.hhjxedu.com/hhjx/index/getInput.do">
        <Button icon="ios-cloud-upload-outline">上传轮播图</Button>
      </Upload>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://www.hhjxedu.com/hhjx',
        table:[],
        columns:[
          {
            title:'图片',
            width:300,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('img', {
                    attrs:{
                      src:params.row.src,
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
          }
        ]
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
    methods:{
     getImg(){
       var vm = this;
       var url = vm.url+"/index/getIndexImgList.do"
       this.$axios.post(url).then(function (res) {
         vm.table=res.data.imgList
       }).catch(function (error) {
         vm.$Message.error("网络错误");
         console.log(error)
       })
     },
      delete(val){
        var vm = this;
        var url = vm.url+"/index/deleteImg.do"
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
      },
      getBack(res){
       var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success("成功");
          vm.getImg();
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
    }
  }
  </script>
