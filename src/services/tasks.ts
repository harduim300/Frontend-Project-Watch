import axios from 'axios'

const API_URL = 'http://localhost:3000/tasks'

interface User {
  id: string
  name: string
  email: string
}

interface TaskUser {
  id: string
  permission: 'OWNER' | 'USER'
  taskId: string
  userId: string
  user: User
}

export interface Task {
  id: string
  title: string
  category: string
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
  description: string
  createdAt: string
  updatedAt: string
  taskUsers: TaskUser[]
  _count: {
    taskUsers: number
  }
}

export const taskService = {
  async getAllTasks() {
    const response = await axios.get(API_URL)
    return response.data
  },

  async getTaskById(id: string) {
    const response = await axios.get(`${API_URL}/${id}`)
    console.log(response.data)
    return response.data
  },

  async createTask(data: Omit<Task, 'id'>) {
    const response = await axios.post(API_URL, data)
    return response.data
  },

  async updateTask(id: string, data: Partial<Task>) {
    const response = await axios.put(`${API_URL}/${id}`, data)
    return response.data
  },

  async deleteTask(id: string) {
    await axios.delete(`${API_URL}/${id}`)
  },

  async shareTask(id: string, email: string) {
    const response = await axios.post(`${API_URL}/${id}/share`, { email: email })
    return response.data
  }
}
