import React, { useState } from 'react'
import { Container, Header } from '../../components'
import {
  Button,
  OptionsContainer,
  Option,
  SelectFirstDot,
  SelectSecondDot,
  ProductsContainer,
  Product,
  Image,
  Details,
  TopContent,
  Total,
} from './styles'
import { arrowBack } from '../../assets'
import { useNavigate } from 'react-router-dom'
import { cardIcon, docIcon } from '../../assets'
import { useLocation } from 'react-router-dom'
import useAuth from '../../hook/useAuth'
import api from '../../services/api'

export default function Checkout() {
  const { token } = useAuth()
  const location = useLocation()
  const { state } = location
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false)
  const [disable, setDisable] = useState(false)

  async function handleConfirmPurchase() {
    setDisable(true)
    if (selected === false) {
      alert('Por favor, marque um método de pagamento.')
      setDisable(false)
      return
    }

    let method = selected > 0 ? 'credit-card' : 'bank-slip'

    const body = {
      ...state,
      method,
    }

    try {
      await api.postCheckout(body, token)
      setDisable(false)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header>
        <h1>Chess Store</h1>
        <img
          src={arrowBack}
          onClick={() => navigate('/cart')}
          alt="Arrow back icon"
        />
      </Header>

      <TopContent>
        <h2>Produtos selecionados</h2>
        <ProductsContainer>
          {state.cart?.map((item) => (
            <Product key={item._id}>
              <Image image={item.image} />
              <Details>
                <p>{item.name}</p>
                <p>
                  <b>R$ {item.price.toFixed(2)}</b>
                </p>
              </Details>
            </Product>
          ))}
        </ProductsContainer>
      </TopContent>

      <Total>
        Valor total: <b>R$ {state.total?.toFixed(2)}</b>
      </Total>

      <OptionsContainer>
        <h2>Método de pagamento</h2>

        <Option onClick={() => setSelected(1)}>
          <img src={cardIcon} alt="Card icon" />
          <h2>Cartão de crédito</h2>
          <SelectFirstDot selected={selected} />
        </Option>

        <Option onClick={() => setSelected(-1)}>
          <img src={docIcon} alt="Document icon" />
          <h2>Boleto bancário</h2>
          <SelectSecondDot selected={selected} />
        </Option>
      </OptionsContainer>

      <Button onClick={handleConfirmPurchase} disabled={disable}>
        Comprar
      </Button>
    </Container>
  )
}
