import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/font/iconfont.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { asyncComponent } from './router/global'
const app = createApp(App)
app.use(router).use(Antd).mount('#app')
asyncComponent(app)

