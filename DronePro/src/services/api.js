import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Get all pilots
export const getPilots = async () => {
  try {
    const response = await api.get('/pilots')
    return response.data
  } catch (error) {
    console.error('Error fetching pilots:', error)
    throw error
  }
}

// Register a new pilot
export const registerPilot = async (pilotData) => {
  try {
    const response = await api.post('/register', pilotData)
    return response.data
  } catch (error) {
    console.error('Error registering pilot:', error)
    throw error
  }
}

// Mock login
export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials)
    return response.data
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

// Get available services
export const getServices = async () => {
  try {
    const response = await api.get('/services')
    return response.data
  } catch (error) {
    console.error('Error fetching services:', error)
    throw error
  }
}

export default api
