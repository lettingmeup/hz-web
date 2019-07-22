import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/pages/index/index'
import aboutMe from '@/pages/aboutMe/aboutMe'
import management from '@/pages/management/management'
import system from '@/pages/system/system'
import team from '@/pages/team/team'
import news from '@/pages/news/news'
import newsDetail from '@/pages/newsDetail/newsDetail'
import talentCenter from '@/pages/TalentCenter/TalentCenter'
import contactUs from '@/pages/ContactUs/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/management',
      name: 'management',
      component: management
    },{
      path: '/system',
      name: 'system',
      component: system
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/talentCenter',
      name: 'talentCenter',
      component: talentCenter
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
