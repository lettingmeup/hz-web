<template>
  <div>
    <Tips :title="titleone"></Tips>
    <Table style="position: absolute;top: 90px;left: 80px" height="500" width="700" border :columns="columns"  :data="table"></Table>
    <Button @click="add" style="position: absolute;top: 90px;left: 800px">添加</Button>
    <Button type="primary" style="position: absolute;top: 120px;left: 800px" @click="delNew">取消</Button>
    <div style="overflow-y:scroll;height: 500px;width: 700px;background: lightyellow;position: absolute;top: 90px;left: 100px;" class="add" v-show="addShow">
      <Button type="primary" @click="addNew">添加新段落</Button>
      添加标题：<Input v-model="title" placeholder="添加标题" style="width: 300px" />
      <div v-for="(item,index) in addList">
        <div style="height: 150px">
        <Input v-model="item.text" type="textarea" :rows="4" placeholder="输入段落" />
          <div>
            <Button @click="delet(index)">删除第{{index+1}}段</Button>
          </div>
        </div>
       </div>
       <Upload
      multiple
      :on-success="getBacks"
      action="http://49.232.53.207/hhjx/index/sideImg.do">
      <Button icon="ios-cloud-upload-outline">上传段落对应的图片</Button>
    </Upload>
      <Button @click="submit">提交</Button>
    </div>
  </div>

</template>
<script>
  import Tips from '@/components/tips'
  export default {
    components: {
      Tips,
    },
    data() {
      return {
        url:'http://49.232.53.207/hhjx',
        titleone:"荣誉",
        fileList:[],
        addList:[],
        title:"",
        addShow:false,
        columns:[
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
            title:'标题',
            width:200,
            align: 'center',
            key: 'title'
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
                      this.delete(params.row.title)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
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
      this.getHonor();
    },
    methods:{
      submit(){
        for(var i = 0;i<this.addList.length;i++){
          this.addList[i].img = this.fileList[i]
          this.addList[i].index = i;
        }
        var vm = this;
        var url = vm.url+"/news/insert.do"
        this.$axios.post(url,this.addList).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.delNew();
            vm.getHonor();
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      delete(val){
        var vm = this;
        var url = vm.url+"/news/delete.do"
        var data={
          title:val
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.getHonor();
          }else{
            vm.$Message.error(res.data.backDesc);
          }
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
      getBacks(res,file){
        var vm = this;
        if(res.backCode=="0000"){
           var url = "http://49.232.53.207/imgs/"+file.name;
           this.fileList.push(url)
        }else{

        }
      },
      delet(val){
        this.addList.splice(val, 1);
      },
      delNew(){
        this.fileList=[];
        this.addList = [];
        this.addShow = false;
      },
      addNew(){
        var data = {
          index:'',
          text:"",
          img:'',
          status:2,
          title:this.title
        }
        this.addList.push(data)
      },
      add(){
        this.addShow = true;
      },
      getHonor(){
        var vm = this;
        var url = vm.url+"/news/getNewsTitle.do"
        var data={
          status:2
        }
        this.$axios.post(url,data).then(function (res) {
          vm.table = res.data.newsBO
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
    }
  }
 </script>
