import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

function getProducts(token) {
  const config = createConfig(token)
  const promise = axios.get(`${BASE_URL}/home`, config)
  return promise
}

function getProduct(param) {
  const promise = axios.get(`${BASE_URL}/home/${param}`)
  return promise
}

function getCartProducts() {
  const promise = axios.get(`${BASE_URL}/cart`)
  return promise
}

function getCupom(param) {
  const promise = axios.get(`${BASE_URL}/cupom/${param}`)
  return promise
}

const api = {
  getProducts,
  getProduct,
  getCartProducts,
  getCupom,
}

export default api
