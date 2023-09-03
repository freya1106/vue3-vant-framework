import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initRem } from '@/utils/common.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

initRem()
app.use(createPinia())
app.use(router)

app.mount('#app')
