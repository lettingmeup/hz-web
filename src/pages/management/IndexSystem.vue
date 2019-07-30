<template>
  <div>
  主页课程体系
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
        var url = "http://localhost:8089/index/getIndexSystem.do"
        this.$axios.post(url).then(function (res) {
          vm.table=res.data.sysBO
        }).catch(function (error) {
          console.log(error)
        })
      },
    }

  }
</script>
