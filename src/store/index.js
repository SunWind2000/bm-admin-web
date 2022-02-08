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
                // children: [
                //     {
                //         name: 'xdcDetails',
                //         text: '蓄电池详情',
                //         type: 'ios-clipboard',
                //         children: [
                //             {
                //                 name: 'table',
                //                 text: '图表分析',
                //                 type: 'ios-grid',
                //                 hidden: true,
                //             },
                //             {
                //                 name: 'lineChart',
                //                 text: '端电流、电压、温度',
                //                 type: 'ios-stats',
                //                 hidden: true,
                //             },
                //             {
                //                 name: 'lineChart',
                //                 text: 'SOH分析',
                //                 type: 'ios-stats',
                //                 hidden: true,
                //             },
                //         ],
                //     },
                // ],
            },
            {
                text: '其他设置',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 't1',
                        text: '表格',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        hidden: true,
                    },
                    {
                        type: 'ios-notifications-outline',
                        name: 'msg',
                        text: '查看消息',
                    },
                    {
                        text: '个人信息',
                        type: 'ios-paper',
                        children: [
                            {
                                type: 'md-lock',
                                name: 'password',
                                text: '修改密码',
                            },
                            {
                                type: 'md-person',
                                name: 'userinfo',
                                text: '基本资料',
                            },
                            {
                                size: 18, // icon大小
                                type: 'md-arrow-forward', // icon类型
                                text: '外链',
                                hidden: true,
                                url: 'https://www.baidu.com',
                                isExternal: true, // 外链 跳到一个外部的 URL 页面
                            },
                        ],
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
