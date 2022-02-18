import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                name: 'history', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'ios-bug', // icon类型
                text: '历史故障记录', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
            {
                name: 'system',
                size: 18, // icon大小
                type: 'md-globe', // icon类型
                text: '系统监控',
            },
            {
                text: '其他设置',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'msg',
                        text: '查看消息',
                    },
                    {
                        type: 'md-person',
                        name: 'userinfo',
                        text: '基本资料',
                    },
                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store
