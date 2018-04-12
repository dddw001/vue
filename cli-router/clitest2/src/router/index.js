import Vue from 'vue'//引入vue
import Router from 'vue-router'//引入vue-router
import HelloWorld from '@/components/HelloWorld'//引入组件
import Hi from '../components/hi.vue'
import Hi1 from '../components/hi1.vue'
import Hi2 from '../components/hi2.vue'

Vue.use(Router)//vue 全局使用 Router

export default new Router({
  routes: [//配置路由
    {//每个链接都是对象
      path: '/',//链接路径
      name: 'HelloWorld',//路由名称
      component: HelloWorld//对应的组件模板
    },
    {
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',name:'HelloWorld/Hi',component:Hi},
        {path:'hi1',name:'HelloWorld/Hi/Hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2}
      ]
    }
  ]
})
