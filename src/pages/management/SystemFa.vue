<template>
  <div>
    <Button @click="makeNew" type="primary">新建</Button>
    <Table height="600" style="width: 100%" border :columns="columns"  :data="table"></Table>
    <div v-show="divShow" style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: absolute;top: 30px;left: 200px">
      <Row>
        英文标题：<Input  style="width: 200px" placeholder="default size"  v-model="news.eng"></Input>
      </Row>
      <Row>
        中文标题：<Input  style="width: 200px" placeholder="default size"  v-model="news.cha"></Input>
      </Row>
      <Row>
        图片：<img v-if="news.img!=''" style="width: 110px;height: 90px" :src="news.img"/>
        <Upload
          :on-success="getBack1"
          action="http://49.232.53.207/hhjx/index/newsBacImg.do">
          <Button icon="ios-cloud-upload-outline">上传图片</Button>
        </Upload>
      </Row>
      <Button @click="submit">提交</Button>
      <Button @click="no" type="error">取消</Button>
    </div>
    <div v-show="getShow" style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: absolute;top: 30px;left: 200px">
      <Table height="400"  style="width: 100%;padding:20px 5px 0 5px" border :columns="getcolumns"  :data="gettable"></Table>
      <Button @click="noGet" type="error">取消</Button>
    </div>
    <div v-show="addShow" style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: absolute;top: 30px;left: 200px">
      <Row>
        图片：<img v-if="news.img!=''" style="width: 110px;height: 90px" :src="news.img"/>
        <Upload
          :on-success="getBack2"
          action="http://49.232.53.207/hhjx/index/newsBacImg.do">
          <Button icon="ios-cloud-upload-outline">上传图片</Button>
        </Upload>
      </Row>
      <Button @click="add">提交</Button>
      <Button @click="noAdd" type="error">取消</Button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url:'http://49.232.53.207/hhjx',
        news:{
          eng:'',
          cha:'',
          img:''
        },
        gettable:[],
        getcolumns:[
          {
            title:'图片',
            minWidth:50,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('img', {
                    attrs:{
                      src:params.row.img,
                      style: 'width: 210px;height:130px'
                    }
                  },
                ),
              ]);
            }
          },
      {title:'操作',
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
                  this.delCli(params.row.id)
                }
              }
            }, '删除')])
      }
      }
        ],
        getShow:false,
        divShow:false,
        addShow:false,
        columns:[{
          title:'英语标题',
          minWidth:50,
          align: 'center',
          key:'eng'
        },{
          title:'汉语标题',
          minWidth:50,
          align: 'center',
          key:'cha'
        },{
          title:'图片',
          minWidth:200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('img', {
                  attrs:{
                    src:params.row.img,
                    style: 'width: 210px;height:130px'
                  }
                },
              ),
            ]);
          }
        },
        {title:'操作',
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
                this.del(params.row.id)
              }
            }
          }, '删除'),
          h('Button', {
            props: {
              size: 'small'
            },
            on: {
              click: () => {
                this.addCil(params.row.id)
              }
            }
          }, '添加详情'),
          h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: () => {
                this.getCil(params.row.id)
              }
            }
          }, '查看详情')
        ]);

      }
    }],
        table:[],
        cli:{
          faId:'',
          img:''
        }
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
      add(){
         var vm = this;
         var url = vm.url+"/system/addCli.do"
         this.$axios.post(url,this.cli).then(function (res) {
           if(res.data.backCode=="0000"){
             vm.$Message.success(res.data.backDesc);
             vm.cli.img=''
             vm.cli.faId=''
             vm.addShow=false;
           }else{
             vm.$Message.error(res.data.backDesc);
           }
         }).catch(function (error) {
           console.log(error)
           vm.$Message.error("网络错误");
         })

      },
      delCli(val){
        var vm = this;
        var data = {
          id:val
        }
        var url = vm.url+"/system/deleteCli.do"
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.noGet();
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          console.log(error)
          vm.$Message.error("网络错误");
        })

      },
      getCil(val){
        this.getShow = true;
        var vm = this;
        var data = {
          faId:val
        }
        var url = vm.url+"/system/getCliData.do"
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.gettable = res.data.list
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          console.log(error)
          vm.$Message.error("网络错误");
        })

      },
      noGet(){
        this.getShow = false;
      },
      addCil(val){
        this.addShow=true;
        this.cli.faId = val;
      },
      noAdd(){
        this.addShow=false;
        this.cli.faId = ""
        this.cli.img = ''
      },
      submit(){
        var vm = this;
        var data = {
          img:vm.news.img,
          cha:vm.news.cha,
          eng:vm.news.eng
        }
        var vm = this;
        var url = vm.url+"/system/insertfaData.do"
        this.$axios.post(url,data).then(function (res) {
            if(res.data.backCode=="0000"){
                vm.$Message.success(res.data.backDesc);
              vm.divShow = false;
              vm.news.img = ""
              vm.news.cha=""
              vm.news.eng=""
              vm.getData();
            }else{
                vm.$Message.error(res.data.backDesc);
            }
        }).catch(function (error) {
          console.log(error)
          vm.$Message.error("网络错误");
        })

      },
      no(){
        var vm = this;
        this.divShow = false;
        vm.news.img = ""
        vm.news.cha=""
        vm.news.eng=""
      },
      makeNew(){
         this.divShow = true;
      },
      getBack2(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success(res.backDesc);
          vm.cli.img = "http://49.232.53.207/imgs/"+file.name
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      getBack1(res,file){
        var vm = this;
        if(res.backCode=="0000"){
          vm.$Message.success(res.backDesc);
          vm.news.img = "http://49.232.53.207/imgs/"+file.name
        }else{
          vm.$Message.error(res.backDesc);
        }
      },
      del(val){
        var vm = this;
        var url = vm.url+"/system/deleteFaById.do"
        var data = {
          id:val
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.getData();
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          console.log(error)
          vm.$Message.error("网络错误");
        })
      },
       getData(){
         var vm = this;
         var url = vm.url+"/system/getFaData.do"
         this.$axios.post(url).then(function (res) {
             vm.table = res.data.listBo;
         }).catch(function (error) {
           console.log(error)
           vm.$Message.error("网络错误");
         })
       }
    }
  }
</script>
