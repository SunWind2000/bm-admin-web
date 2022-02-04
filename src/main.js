import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './permission'
import './assets/icons'

Vue.config.productionTip = false
Vue.use(ViewUI)

Vue.use(Element, {
    size: Cookies.get('size') || 'small',
})

Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
