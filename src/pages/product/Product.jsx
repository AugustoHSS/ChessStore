import React from 'react'
import { Container, Header } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { arrowBack, cartIcon, cartIconBlack } from '../../assets'
import {
  ProductContainer,
  PathText,
  SlideShow,
  PriceContainer,
  StockDetails,
  Details,
  Button,
  Image,
  ButtonGuest,
} from './styles'
import useAuth from '../../hook/useAuth'

export default function Product() {
  const { guest, token } = useAuth()
  const navigate = useNavigate()
  const { productId } = useParams()
  const [productData, setProductData] = useState(null)
  const [stockStatus, setStockStatus] = useState({
    color: true,
    text: '',
  })

  useEffect(() => {
    if (productData?.stock <= 20 && productData?.stock > 0) {
      setStockStatus({
        color: false,
        text: `Corra só restam ${productData?.stock}!`,
      })
    } else if (productData?.stock === 0) {
      setStockStatus({ color: false, text: `Esgotado` })
    } else {
      setStockStatus({ color: true, text: `Em estoque` })
    }
  }, [typeof productData?.stock])

  useEffect(() => {
    const promise = api.getProduct(productId)
    promise.then((response) => {
      setProductData(response.data)
    })
    promise.catch((error) => console.log(error.response))
  }, [])

  function addProductToCart() {
    const body = {
      productId,
      name: productData.name,
      image: productData.image,
      price: productData.price,
    }
    const promise = api.addProductCart(body, token)
    promise.then(() => alert('produto adicionado'))
    promise.catch((error) => console.log(error.response.data))
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

      <ProductContainer>
        <PathText>
          Home / {productData?.type} / <b>{productData?.name}</b>
        </PathText>

        <SlideShow>
          <Image image={productData?.image}></Image>
        </SlideShow>

        <PriceContainer>
          <h2>{productData?.name}</h2>
          <p>R$ {productData?.price.toFixed(2)}</p>
        </PriceContainer>

        <StockDetails stock={stockStatus.color}>
          {stockStatus.text}
        </StockDetails>

        <Details>{productData?.text}</Details>

        {guest ? (
          <ButtonGuest onClick={() => navigate('/sign-up')}>
            Cadastre-se
          </ButtonGuest>
        ) : (
          <Button onClick={() => addProductToCart()}>
            Adicionar ao Carrinho <img src={cartIconBlack} alt="Cart icon" />
          </Button>
        )}
      </ProductContainer>
    </Container>
  )
}
