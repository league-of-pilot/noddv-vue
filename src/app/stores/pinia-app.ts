import router from '@views/router'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

export { pinia as piniaWithRouter }
