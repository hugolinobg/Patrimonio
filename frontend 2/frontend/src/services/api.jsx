import axios from "axios"

const urlApi = "http://localhost:3000/api"

const api = axios.create({
  baseURL: urlApi,
})

export default api
