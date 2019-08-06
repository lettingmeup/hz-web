<template>
  <div>
    主页块数据
    <Table height="600" style="width: 100%" border :columns="columns"  :data="table"></Table>
    <div v-show="divShow" style="text-align:center;height: 500px;width: 700px;background:#b3d4fc;border-color:black;border:1px;position: absolute;top: 30px;left: 200px">
      <Row>
        标题：<Input  style="width: 200px" placeholder="default size"  v-model="title"></Input>
      </Row>
      <Row>
        数字：<Input  style="width: 200px" placeholder="default size"  v-model="num"></Input>
      </Row>
      <Row>
        单位：<Input  style="width: 200px" placeholder="default size"  v-model="spec"></Input>
      </Row>
      <Row>
        规格：<Input  style="width: 200px" placeholder="default size"  v-model="danwei"></Input>
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
        num:'',
        spec:'',
        danwei:'',
        title:'',
        divShow:false,
        table:[],
        columns:[
          {
            title:'标题',
            minWidth:50,
            align: 'center',
            key:'title'
          },
          {
            title:'数字',
            minWidth:200,
            align: 'center',
            key:'num'
          },
          {
            title:'单位',
            minWidth:100,
            align: 'center',
            key:'spec'
          },
          {
            title:'规格',
            minWidth:50,
            align: 'center',
            key:'danwei'
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
      edit(val){
        this.divShow = true;
        this.id = val.id
        this.num=val.num
        this.spec=val.spec
        this.danwei=val.danwei
        this.title=val.title
      },
      submit(){
        var vm = this;
        var url = vm.url+"/index/updateIndexBlock.do"
        var data={
          id:vm.id,
          num:vm.num,
          spec:vm.spec,
          danwei:vm.danwei,
          title:vm.title
        }
        this.$axios.post(url,data).then(function (res) {
          if(res.data.backCode=="0000"){
            vm.$Message.success(res.data.backDesc);
            vm.divShow = false;
            vm.id=''
            vm.num=''
            vm.spec=''
            vm.danwei=''
            vm.title=''
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
        this.divShow = false;
        this.num=""
        this.spec=""
        this.danwei=""
        this.title=""
      },
      getImg(){
        var vm = this;
        var url = vm.url+"/index/getIndexBlock.do"
        this.$axios.post(url).then(function (res) {
          vm.table=res.data.blockBO
        }).catch(function (error) {
          vm.$Message.error("网络错误");
          console.log(error)
        })
      },
    }

  }
</script>
