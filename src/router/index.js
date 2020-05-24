import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layouts/index'
Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      component: Layout,
      redirect: '/',
      name: '首页',
      meta: { title: '首页', isMenu: true },
      children: [
        {
          path: '/',
          name: '首页' + +new Date(),
          meta: { title: '首页' },
          component: () => import('@/views/home/index.vue'),
        }
      ]
    },
    // {
    //   path: '/new/login',
    //   component: () => import('client/login')
    // },
    // {
    //   path: '/reg/register',
    //   component: () => import('client/register')
    // },
]

const router = new VueRouter({
  routes
})

export default router
