/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:48:07
 * @modify date 2021-06-12 23:54:10
 * @desc 异步权限路由列表
 */

/**
 * redirect: noredirect       当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'         设定路由名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : 
     title: 'title'           路由标题
     icon: 'yrisicon-name'    路由图标
     hidden: false            当设置为true，则不影响导航和标签
     Cachable: true           当设置为false，则不会被 <keep-alive> 缓存
     breadcrumb: true         当设置为false，则不会在breadcrumb面包屑中显示
     affix: false             当设置为true，则会一直固定在标签页中
     role:["SUPER"|"ADMIN"|"COMMON"|"GUEST"]  
     
*/

import Layout from '../layout/index.vue';

const asyncRoutes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    // alias: '/home',
    meta: {
      title: '系统首页',
      icon: 'yrisicon-home',
      role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST'],
      affix: true
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '综合展示',
          icon: 'yrisicon-home',
          role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST'],
          affix: true
        }
      }
    ]
  },
  {
    path: '/business',
    name: 'Business',
    component: Layout,
    redirect: '/business/purchase',
    meta: {
      title: '业务管理',
      icon: 'yrisicon-business',
      role: ['SUPER', 'ADMIN', 'COMMON']
    },
    children: [
      {
        path: '/business/purchase',
        name: 'Purchase',
        component: () => import('../views/business/purchase/index.vue'),
        meta: {
          title: '采购入库',
          icon: 'yrisicon-purchase',
          role: ['SUPER', 'ADMIN', 'COMMON']
        }
      },
      {
        path: '/business/sale',
        name: 'Sale',
        component: () => import('../views/business/sale/index.vue'),
        meta: {
          title: '销售出库',
          icon: 'yrisicon-sale',
          role: ['SUPER', 'ADMIN', 'COMMON']
        }
      }
    ]
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Layout,
    redirect: '/finance/tip',
    meta: {
      title: '财务管理',
      icon: 'yrisicon-finance',
      role: ['SUPER', 'ADMIN', 'COMMON']
    },
    children: [
      {
        path: '/finance/capital',
        name: 'Capital',
        component: () => import('../views/finance/capital/index.vue'),
        meta: {
          title: '业务资金',
          icon: 'yrisicon-capital',
          role: ['SUPER', 'ADMIN', 'COMMON']
        }
      },
      {
        path: '/finance/cost',
        name: 'Cost',
        component: () => import('../views/finance/cost/index.vue'),
        meta: {
          title: '日常资金',
          icon: 'yrisicon-cost',
          role: ['SUPER', 'ADMIN', 'COMMON']
        }
      }
    ]
  },
  {
    path: '/help',
    name: 'Help',
    component: Layout,
    redirect: '/help/tip',
    meta: {
      title: '系统帮助',
      icon: 'yrisicon-high',
      role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST']
    },
    children: [
      {
        path: '/help/tip',
        name: 'Tip',
        component: () => import('../views/help/tip.vue'),
        meta: {
          title: '操作技巧',
          icon: 'yrisicon-tip',
          role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST']
        }
      },
      {
        path: '/help/about',
        name: 'About',
        component: () => import('../views/help/about.vue'),
        meta: {
          title: '关于系统',
          icon: 'yrisicon-about',
          role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST']
        }
      },
      {
        path: '/help/question',
        name: 'Question',
        component: () => import('../views/help/question.vue'),
        meta: {
          title: '问题列表',
          icon: 'yrisicon-question',
          role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST']
        },
        children: [
          {
            path: '/help/question/A',
            name: 'QuestionA',
            component: () => import('../views/help/QuestionA.vue'),
            meta: {
              title: '问题A',
              icon: 'yrisicon-question',
              role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST']
            }
          },
          {
            path: '/help/question/B',
            name: 'QuestionB',
            component: () => import('../views/help/QuestionB.vue'),
            meta: {
              title: '问题B',
              icon: 'yrisicon-question',
              role: ['SUPER', 'ADMIN', 'COMMON', 'GUEST']
            }
          }
        ]
      }
    ]
  }
];

export default asyncRoutes;
