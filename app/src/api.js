import axios from 'axios'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:4000/api/'

const api = axios.create({ baseURL: API_BASE_URL })

export const adminApi = {
  login: () => api.get('login'),
  adminDetail: (id) => api.get(`admin/${id}`),
}

export const employeeApi = {
  login: () => api.get('login'),
  employeeDetail: (id) => api.get(`employee/${id}`),
}

export default api
