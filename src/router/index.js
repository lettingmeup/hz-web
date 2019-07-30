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
import myself from '@/pages/myself/myself'
import indexScoll from '@/pages/management/IndexScoll'
import IndexData from '@/pages/management/IndexData'
import Hornr from '@/pages/management/Hornr'
import News from '@/pages/management/News'
import IndexBlock from '@/pages/management/IndexBlock'
import IndexSystem from '@/pages/management/IndexSystem'
import SystemCli from '@/pages/management/SystemCli'
import AboutMeScoll from '@/pages/management/AboutMeScoll'
import ContectUs from '@/pages/management/ContectUs'
import SystemFa from '@/pages/management/SystemFa'
import Talent from '@/pages/management/Talent'
import AboutMeData from '@/pages/management/AboutMeData'
import TeamMate from '@/pages/management/TeamMate'
import AboutDevelop from '@/pages/management/AboutDevelop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/AboutDevelop',
      name: 'hello',
      component: AboutDevelop
    },
    {
      path: '/TeamMate',
      name: 'TeamMate',
      component: TeamMate
    },
    {
      path: '/AboutMeData',
      name: 'AboutMeData',
      component: AboutMeData
    },
    {
      path: '/Talent',
      name: 'Talent',
      component: Talent
    },
    {
      path: '/SystemFa',
      name: 'SystemFa',
      component: SystemFa
    },
    {
      path: '/ContectUs',
      name: 'ContectUs',
      component: ContectUs
    },
    {
      path: '/AboutMeScoll',
      name: 'AboutMeScoll',
      component: AboutMeScoll
    },
    {
      path: '/SystemCli',
      name: 'SystemCli',
      component: SystemCli
    },
    {
      path: '/IndexSystem',
      name: 'IndexSystem',
      component: IndexSystem
    },
    {
      path: '/IndexBlock',
      name: 'IndexBlock',
      component: IndexBlock
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/IndexData',
      name: 'IndexData',
      component: IndexData
    },
    {
      path: '/Hornr',
      name: 'Hornr',
      component: Hornr
    },
    {
      path: '/indexScoll',
      name: 'indexScoll',
      component: indexScoll
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
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    }
  ]
})
