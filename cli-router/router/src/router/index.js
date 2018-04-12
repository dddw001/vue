import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '../components/Hi1.vue'
import Hi2 from '../components/Hi2.vue'
import Params from '../components/params.vue'
import Error from '../components/Error.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      // beforeEnter:(to,from,next)=>{
      //   console.log(to);
      //   console.log(from);
      //   //next();如果没有next()不会跳转了
      //   //next(false);//不跳转
      //   //next({path:'/'});//跳转到另一个页面
      // }
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/cdx'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
