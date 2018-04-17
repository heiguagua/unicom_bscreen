import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './css/common.css'
import './less/common.less'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)

Vue.use(ElementUI);

const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    // if (auth && !isLogin && path !== '/login') {
    //     return next({ path: '/login' })
    // }
    next()
})

new Vue({ store, router }).$mount('#app')