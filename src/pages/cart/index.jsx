import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Header } from '../../components'
import { arrowBack, cartIcon } from '../../assets'
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
  const [cupom, setCupom] = useState('')
  const [activeCupom, setActiveCupom] = useState(1)
  const [cartProducts, setCartProducts] = useState([
    {
      image:
        'https://cdn.shopify.com/s/files/1/1297/3303/products/3-75-sinquefield-design-chess-pieces-14933615607895_grande.jpg?v=1611367139',
      name: 'Peças de xadrez Sinquefield Cup 3.75',
      price: 30.3,
      _id: 1,
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/1297/3303/products/the-zagreb-59-series-chess-pieces-3-875-king-21398384257_grande.jpg?v=1575932134',
      name: 'Peças de xadrez Zagreb 59 3.75',
      price: 60,
      _id: 2,
    },
  ])
  let subTotal = 0

  useEffect(() => {
    const promise = api.getCartProducts()
    promise.then((response) => {
      setCartProducts(response.data)
    })
    promise.catch((error) => console.log(error.response))
  }, [cartProducts])

  function removeProduct() {
    alert('removido')
  }
  function printCartProducts() {
    return cartProducts.map((product) => {
      subTotal += parseFloat(product.price)
      return (
        <Product key={product._id}>
          <img src={product.image} alt="" />
          <ProductDetails>
            <p>{product.name}</p>
            <p>{`R$ ${product.price.toFixed(2)}`}</p>
          </ProductDetails>
          <ion-icon onClick={removeProduct} name="trash-outline"></ion-icon>
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
            <span>{`R$ ${subTotal.toFixed(2)}`}</span>
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
                : (subTotal * (1 - activeCupom)).toFixed(2)
            }`}</span>
          </div>
        </Prices>
        <Button onClick={() => navigate('/checkout')}>
          Finalizar a compra
        </Button>
      </Footer>
    </Container>
  )
}
