import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/css/global.css'

createApp(App).use(store).use(router)
    .use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
