import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Detail from '../components/details/Detail.vue'
import Sum from '../components/details/Sum.vue'
import Forecast from '../components/details/Forecast.vue'
import Analysis from '../components/details/Analysis.vue'
import Publish from '../components/details/Publish.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Main
    },
    {
      path:'/detail',
      component:Detail,
      children:[
        {path:'sum',name:'sum',component:Sum},
        {path:'forecast',name:'forecast',component:Forecast},
        {path:'analysis',name:'analysis',component:Analysis},
        {path:'publish',name:'publish',component:Publish}
      ],
      redirect:'/detail/sum'
    }
  ]
})
