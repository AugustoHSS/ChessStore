import React from 'react'
import { LoginButton } from '../../components'
import { Container } from './styles'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Lobby() {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={Logo} alt="" />
      <LoginButton onClick={() => navigate('/sign-in')}>
        Já possui uma conta? Faça login
      </LoginButton>
      <LoginButton onClick={() => navigate('/sign-up')}>
        Deseja criar uma conta? faça o cadastro
      </LoginButton>
      <LoginButton onClick={() => navigate('/home')}>
        Entrar como visitante
      </LoginButton>
    </Container>
  )
}
