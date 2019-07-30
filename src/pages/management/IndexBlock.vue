<template>
  <div>
    主页块数据
    <Table style="height: 100%;width: 100%" border :columns="columns"  :data="table"></Table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        table:[],
        columns:[
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
            title:'标题',
            minWidth:50,
            align: 'center',
            key:'title'
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
                      this.delete(params.row)
                    }
                  }
                }, '操作')
              ]);
            }
          }
        ]
      }
    },
    mounted(){
      this.getImg();
    },
    methods:{
      getImg(){
        var vm = this;
        var url = "http://localhost:8089/index/getIndexBlock.do"
        this.$axios.post(url).then(function (res) {
          vm.table=res.data.blockBO
        }).catch(function (error) {
          console.log(error)
        })
      },
    }

  }
</script>
