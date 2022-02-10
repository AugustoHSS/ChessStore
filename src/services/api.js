import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function getProducts() {
  const promise = axios.get(`${BASE_URL}/home`)
  return promise
}

function getProduct(param) {
  const promise = axios.get(`${BASE_URL}/home/${param}`)
  return promise
}

const api = {
  getProducts,
  getProduct,
}

export default api
