import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Header } from '../../components'
import { arrowBack, cartIcon } from '../../assets'
import useAuth from '../../hook/useAuth'
import {
  Product,
  ProductDetails,
  CupomInput,
  Button,
  CupomButton,
  Prices,
  Footer,
  Products,
  CupomContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const navigate = useNavigate()
  const { token } = useAuth()
  const [cupom, setCupom] = useState('')
  const [activeCupom, setActiveCupom] = useState(1)
  const [cartProducts, setCartProducts] = useState([])
  let subTotal = 0

  useEffect(() => {
    const promise = api.getCartProducts(token)
    promise.then((response) => {
      setCartProducts(response.data)
    })
    promise.catch((error) => console.log(error.response.data))
  }, [cartProducts, token])

  function removeProduct() {
    const answer = window.confirm(
      'Você realmente deseja deletar esse movimento?'
    )
    if (answer) {
      api.deleteCartProduct(token)
    }
  }
  function printCartProducts() {
    return cartProducts.map((product) => {
      subTotal += parseFloat(product.price)
      return (
        <Product key={product._id}>
          <img src={product.image} alt="" />
          <ProductDetails>
            <p>{product.name}</p>
            <p>{`R$ ${parseFloat(product.price).toFixed(2)}`}</p>
          </ProductDetails>
          <ion-icon
            onClick={() => removeProduct(product._id)}
            name="trash-outline"
          ></ion-icon>
        </Product>
      )
    })
  }
  function cupomTest() {
    const promise = api.getCupom(cupom)
    promise.then((response) => {
      setActiveCupom(response.data)
      setCupom('')
    })
    promise.catch(() => {
      alert('Cupom Invalido')
      setActiveCupom(1)
    })
  }
  return (
    <Container>
      <Header>
        <img
          src={arrowBack}
          onClick={() => navigate('/home')}
          alt="Arrow back icon"
        />
        <h1>Chess Store</h1>
        <img onClick={() => navigate('/cart')} src={cartIcon} alt="Cart icon" />
      </Header>
      <Products>{printCartProducts()}</Products>
      <Footer>
        <CupomContainer>
          <CupomButton onClick={() => cupomTest()}>Aplicar</CupomButton>
          <CupomInput
            value={cupom}
            onChange={(e) => setCupom(e.target.value)}
            placeholder="Cupom"
          />
        </CupomContainer>
        <Prices>
          <div>
            <p>Subtotal</p>
            <span>{`R$ ${parseFloat(subTotal).toFixed(2)}`}</span>
          </div>
          <div>
            <p>Desconto</p>
            <span>{`R$ ${
              activeCupom === 1
                ? '0.00'
                : parseFloat(subTotal * activeCupom).toFixed(2)
            }`}</span>
          </div>
          <div>
            <p>Total</p>
            <span>{`R$ ${
              activeCupom === 1
                ? subTotal.toFixed(2)
                : (parseFloat(subTotal) * (1 - activeCupom)).toFixed(2)
            }`}</span>
          </div>
        </Prices>
        <Button
          onClick={() =>
            navigate('/checkout', {
              state: {
                cart: cartProducts,
                total:
                  activeCupom === 1
                    ? subTotal
                    : parseFloat(subTotal) * (1 - activeCupom),
              },
            })
          }
        >
          Finalizar a compra
        </Button>
      </Footer>
    </Container>
  )
}
