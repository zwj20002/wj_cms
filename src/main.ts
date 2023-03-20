import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'
// import * as ElIconModules from '@element-plus/icons-vue'
import 'normalize.css'
import 'element-plus/dist/index.css'
import './assets/css/index.less'
// import './service/axios.demo.ts'
import { setupStore } from './store'
import router from '@/router'
import store from '@/store'
// import { method } from 'lodash'
const app = createApp(App)
//注册icon图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
registerApp(app)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
