
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu style="overflow-y:scroll;height: 700px" active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <span style="width: 100px" @click="change(1)">主页轮播图</span>
          </MenuItem>
          <MenuItem name="1-2">
            <span style="width: 100px" @click="change(2)">主页页面文字</span>
          </MenuItem>
          <MenuItem name="1-3">
            <span style="width: 100px" @click="change(3)">主页荣誉</span>
          </MenuItem>
          <MenuItem name="1-4">
            <span style="width: 100px" @click="change(4)">主页新闻</span>
          </MenuItem>
          <MenuItem name="1-5">
            <span style="width: 100px" @click="change(5)">主页课程体系</span>
          </MenuItem>
          <MenuItem name="1-6">
            <span style="width: 100px" @click="change(6)">主页块数据</span>
          </MenuItem>
          <MenuItem name="1-7">
            <span style="width: 100px" @click="change(7)">关于我们发展及主要数据</span>
          </MenuItem>
          <MenuItem name="1-8">
            <span style="width: 100px" @click="change(8)">关于我们主数据</span>
          </MenuItem>
          <MenuItem name="1-9">
            <span style="width: 100px" @click="change(9)">关于我们轮播图</span>
          </MenuItem>
          <MenuItem name="1-10">
            <span style="width: 100px" @click="change(10)">团队</span>
          </MenuItem>
          <MenuItem name="1-11">
            <span style="width: 100px" @click="change(11)">部门</span>
          </MenuItem>
          <MenuItem name="1-12">
            <span style="width: 100px" @click="change(12)">课程体系</span>
          </MenuItem>
          <MenuItem name="1-13">
            <span style="width: 100px" @click="change(13)">课程体系详情</span>
          </MenuItem>
          <MenuItem name="1-14">
            <span style="width: 100px" @click="change(14)">联系我们</span>
          </MenuItem>
          <MenuItem name="1-15">
            <span style="width: 100px"></span>
          </MenuItem>
          <MenuItem name="1-16">
            <span style="width: 100px"></span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Card>
            <div style="height: 600px">
              <iframe style="height: 100%;width: 100%" :src="url"></iframe>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        url:"http://localhost:8080/#/indexScoll",
        isCollapsed: false
      };
    },
    methods:{
      change(val){
        switch (val) {
          case 1:this.url="http://localhost:8080/#/indexScoll";
            break;
          case 2: this.url="http://localhost:8080/#/IndexData"
            break;
          case 3: this.url="http://localhost:8080/#/Hornr"
            break;
          case 4: this.url="http://localhost:8080/#/News"
            break;
          case 5: this.url="http://localhost:8080/#/IndexSystem"
            break;
          case 6: this.url="http://localhost:8080/#/IndexBlock"
            break;
          case 7: this.url="http://localhost:8080/#/AboutDevelop"
            break;
          case 8: this.url="http://localhost:8080/#/AboutMeData"
            break;
          case 9: this.url="http://localhost:8080/#/AboutMeScoll"
            break;
          case 10: this.url="http://localhost:8080/#/TeamMate"
            break;
          case 11: this.url="http://localhost:8080/#/Talent"
            break;
          case 12: this.url="http://localhost:8080/#/SystemFa"
            break;
          case 13: this.url="http://localhost:8080/#/SystemCli"
            break;
          case 14: this.url="http://localhost:8080/#/ContectUs"
            break;
          default:
            break;

        }

      }
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>
<style scoped>
  .ivu-layout-header{
    height: 0px;
  }
  .layout-con{
    height: 100%;
    width: 100%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
