import axios from 'axios'

const API_URL = 'http://localhost:3000'

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
    } catch (error) {
      throw error
    }
  },

  async register(data: RegisterData) {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, data)
      return response.data
    } catch (error) {
      throw error
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
