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
} from './styles'

export default function Product() {
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
  }, [productId])

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
        <Button>
          Adicionar ao Carrinho <img src={cartIconBlack} alt="Cart icon" />
        </Button>
      </ProductContainer>
    </Container>
  )
}
