import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 创建路由实例对象
const commonRoutes = [
    {
        // 每个路由规则都是一个实例对象，至少包含path、component两个属性
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    {
        path: '/',
        redirect: '/home',
    },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    history: {
        path: 'history',
        name: 'history',
        meta: { title: '历史故障记录' },
        component: () => import('../views/T1.vue'),
    },
    system: {
        path: 'system',
        name: 'system',
        meta: { title: '系统监控' },
        component: () => import('../views/system.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('../views/UserInfo.vue'),
    },
}

// 创建路由实例对象
const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
