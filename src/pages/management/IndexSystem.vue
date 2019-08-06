<template>
  <div style="text-align: center">
  主页课程体系
    <Table height="600" style="width: 100%" border :columns="columns"  :data="table"></Table>
       <div v-show="divShow" style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: absolute;top: 30px;left: 200px">
         <Row>
           课程名称：<Input  style="width: 200px" placeholder="default size"  v-model="title"></Input>
         </Row>
         <Row>
           课程介绍：<Input  style="width: 200px" placeholder="default size"  v-model="star"></Input>
         </Row>
         <Row>
           图标：<img style="width: 110px;height: 90px" :src="icon"/>
           <Upload
             :on-success="getBack1"
             action="http://49.232.53.207/hhjx/index/newsBacImg.do">
             <Button icon="ios-cloud-upload-outline">更换图片</Button>
           </Upload>
         </Row>
         <Row>
           背景：<img style="width: 110px;height: 90px" :src="backImg"/>
           <Upload
             :on-success="getBack2"
             action="http://49.232.53.207/hhjx/index/newsBacImg.do">
             <Button icon="ios-cloud-upload-outline">更换图片</Button>
           </Upload>
         </Row>
         <Button @click="submit">提交</Button>
         <Button @click="no" type="error">取消</Button>
       </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://49.232.53.207/hhjx',
        id:'',
        title:'',
        star:'',
        icon:'',
        backImg:'',
        divShow:false,
        table:[],
        columns:[
          {
            title:'背景图片',
            width:200,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('img', {
                    attrs:{
                      src:params.row.backImg,
                      style: 'width: 100px;height:160px'
                    }
                  },
                ),
              ]);
            }
          },
          {
            title:'图标',
            width:100,
            align: 'center',
            render: (h, params) => {
              return h('div',{attrs:{ style: 'background:black'}}, [
                h('img', {
                    attrs:{
                      src:params.row.icon,
                      style: 'width: 60px;height:80px'
                    }
                  },
                ),
              ]);
            }
          },
          {
            title:'标题名称',
            minWidth:50,
            align: 'center',
            key:'title'
          },
          {
            title:'标题介绍',
            minWidth:50,
            align: 'center',
            key:'star'
          },
          {
            title:'操作',
            align: 'center',
            minWidth:50,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.edit(params.row)
                    }
                  }
                }, '操作')
              ]);
            }
          }
        ]
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
      this.getImg();
    },
    methods:{
      submit(){
        var vm = this;
        var url = vm.url+"/index/updateSystem.do"
        var data = {
          id : vm.id,
          icon:vm.icon,
          title:vm.title,
          star:vm.star,
          backImg:vm.backImg
        }
         this.$axios.post(url,data).then(function (res) {
           if(res.data.backCode=="0000"){
             vm.$Message.success(res.data.backDesc);
             vm.divShow = ""
             vm.id = ""
             vm.title=""
             vm.star=""
             vm.icon=""
             vm.backImg=""
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
        this.divShow = ""
        this.id = ""
        this.title=""
        this.star=""
        this.icon=""
        this.backImg=""
      },
      getImg(){
        var vm = this;
        var url = vm.url+"/index/getIndexSystem.do"
        this.$axios.post(url).then(function (res) {
          vm.table=res.data.sysBO
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      edit(val){
        this.divShow = true
        this.id = val.id
        this.title=val.title
        this.star=val.star
        this.icon=val.icon
        this.backImg=val.backImg
      },
      getBack1(res,file){
        var vm= this;
        if(res.backCode=="0000"){
          this.icon="http://49.232.53.207/imgs/"+file.name;
          vm.$Message.success(res.backDesc);
        }else{
          vm.$Message.error(res.backDesc);
        }

      },
      getBack2(res,file){
        var vm= this;
        if(res.backCode=="0000"){
          this.backImg="http://49.232.53.207/imgs/"+file.name;
          vm.$Message.success(res.backDesc);
        }else{
          vm.$Message.error(res.backDesc);
        }
      }
    }

  }
</script>
