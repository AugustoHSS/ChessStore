import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Input from '../../components/Input'
import LoginButton from '../../components/LoginButton'
import { Container, data } from './styles'
import Logo from '../../assets/logo.png'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  function doSignUp(e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('As senhas não são iguais. Tente novamente.')
      return
    }
    setIsLoading(true)
    const promise = axios.post('http://localhost:5000/sign-up', {
      name,
      email,
      password,
    })
    promise.then(() => {
      setIsLoading(false)
      navigate('/sign-in')
    })
    promise.catch((error) => {
      alert(error.response.data)
      setIsLoading(false)
    })
  }
  return (
    <Container>
      <img src={Logo} alt="" />
      <h1>Chess Store</h1>
      <form onSubmit={doSignUp}>
        <Input
          type="text"
          value={name}
          disabled={isLoading}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <Input
          type="password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <Input
          type="password"
          value={confirmPassword}
          disabled={isLoading}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirme a senha"
          required
        />
        <LoginButton>
          {isLoading ? <data.Component {...data.props} /> : 'Cadastrar'}
        </LoginButton>
      </form>
      <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
    </Container>
  )
}
