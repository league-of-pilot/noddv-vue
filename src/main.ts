import '@app/assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@app/App.vue'
import router from '@views/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
