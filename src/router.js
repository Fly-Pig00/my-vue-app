import { createRouter, createWebHistory } from 'vue-router'
import BasicInfo from './Pages/PersonalInfo/BasicInfo.vue';
import Physical from './Pages/PersonalInfo/Physical.vue';


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/basicinfo'
    },
    {
      path: '/basicinfo',
      component: BasicInfo
    },
    {
      path: '/physical',
      component: Physical
    }
  ]

})
