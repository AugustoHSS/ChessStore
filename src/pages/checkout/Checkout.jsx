import React, { useState } from 'react'
import { Container, Header } from '../../components'
import {
  Button,
  OptionsContainer,
  Option,
  SelectFirstDot,
  SelectSecondDot,
} from './styles'
import { arrowBack } from '../../assets'
import { useNavigate } from 'react-router-dom'
import { cardIcon, docIcon } from '../../assets'

export default function Checkout() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false)

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
      <OptionsContainer>
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
      <Button>Comprar</Button>
    </Container>
  )
}
