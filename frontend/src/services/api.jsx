import axios from "axios"

const urlApi = "http://10.132.198.4:3000/v1/api"

const api = axios.create({
  baseURL: urlApi,
  timeout: 2500,
})

export default api
