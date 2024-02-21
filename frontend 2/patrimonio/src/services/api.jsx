import axios from "axios"

const urlApi = "http://localhost:3000/api/patrimony"

const api = axios.create({
  baseURL: urlApi,
})

export default api
