import axios from 'axios'

const API_URL = 'https://back-end-projeto-watch.vercel.app'

// Configuração global do axios
axios.defaults.withCredentials = true

interface LoginData {
  email: string
  password: string
}

interface RegisterData extends LoginData {
  name: string
}

export const authService = {
  async login(data: LoginData) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, data)
      return response.data
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error('Email ou senha incorretos')
      }
      throw new Error('Erro ao fazer login. Tente novamente.')
    }
  },

  async register(data: RegisterData) {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, data)
      return response.data
    } catch (error: any) {
      if (error.response?.status === 409) {
        throw new Error('Este email já está em uso')
      }
      throw new Error('Erro ao fazer registro. Tente novamente.')
    }
  },

  // Função para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    const cookies = document.cookie.split(';')
    return cookies.some(cookie => cookie.trim().startsWith('authToken='))
  },

  // Função para fazer logout
  async logout() {
    try {
      await axios.post(`${API_URL}/auth/logout`)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }
}
