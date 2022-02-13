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

function getCartProducts(token) {
  const config = createConfig(token)
  const promise = axios.get(`${BASE_URL}/cart`, config)
  return promise
}

function getCupom(param) {
  const promise = axios.get(`${BASE_URL}/cupom/${param}`)
  return promise
}

function addProductCart(body, token) {
  const config = createConfig(token)
  const promise = axios.post(`${BASE_URL}/cart`, body, config)
  return promise
}

function deleteCartProduct(token, param) {
  const config = createConfig(token)
  const promise = axios.delete(`${BASE_URL}/cart/${param}`, config)
  return promise
}

function postCheckout(body, token) {
  const config = createConfig(token)
  const promise = axios.post(`${BASE_URL}/checkout`, body, config)
  return promise
}

const api = {
  getProducts,
  getProduct,
  getCartProducts,
  getCupom,
  addProductCart,
  deleteCartProduct,
  postCheckout,
}

export default api
