import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

// https://stackoverflow.com/questions/71249575/i-cant-access-my-routes-from-the-store-pinia-vuejs3

export const useAuthStore = defineStore('auth', {
  state: () => {
    // const router = useRouter()

    return {
      isAuthenticated: false,
      accessToken: '',
      refreshToken: ''
      // router
    }
  },
  actions: {
    login(accessToken: string, refreshToken: string) {
      const router = useRouter()

      this.accessToken = accessToken
      this.refreshToken = refreshToken
      this.isAuthenticated = true
      localStorage.setItem('access_token', accessToken)
      localStorage.setItem('refresh_token', refreshToken)
      router.push('/')
    },
    logout() {
      this.accessToken = ''
      this.refreshToken = ''
      this.isAuthenticated = false
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      window.location.reload()
    },
    checkAuth() {
      const accessToken = localStorage.getItem('access_token')
      const refreshToken = localStorage.getItem('refresh_token')
      if (accessToken && refreshToken) {
        this.login(accessToken, refreshToken)
      }
    }
  }
})
