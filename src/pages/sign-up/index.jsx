import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import LoginButton from '../../components/LoginButton'
import { Container, data } from './styles'
import Logo from '../../assets/logo.png'
import { useForm } from 'react-hook-form'
import signUpSchema from '../../schemas/signUpSchema'
import { joiResolver } from '@hookform/resolvers/joi'
import api from '../../services/api'

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(signUpSchema) })

  const onSubmit = (e, data) => {
    doSignUp(e, data)
  }
  function doSignUp(data, e) {
    e.preventDefault()
    setIsLoading(true)
    delete data.confirmPassword
    const promise = api.signUp(data)
    promise.then(() => {
      setIsLoading(false)
      navigate('/sign-in')
    })
    promise.catch((error) => {
      setIsLoading(false)
      alert(error.response.data)
    })
  }
  return (
    <Container>
      <img src={Logo} alt="" />
      <h1>Chess Store</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Nome"
          {...register('name')}
          disabled={isLoading}
          isValid={!errors.name?.message}
        />
        <p>{errors.name?.message}</p>
        <Input
          placeholder="E-mail"
          {...register('email')}
          disabled={isLoading}
          isValid={!errors.email?.message}
        />
        <p>{errors.email?.message}</p>
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          disabled={isLoading}
          isValid={!errors.password?.message}
        />
        <p>{errors.password?.message}</p>
        <Input
          placeholder="Confirme a senha"
          type="password"
          {...register('confirmPassword')}
          disabled={isLoading}
          isValid={!errors.confirmPassword?.message}
        />
        <p>{errors.confirmPassword?.message}</p>
        <LoginButton disabled={isLoading}>
          {isLoading ? <data.Component {...data.props} /> : 'Cadastrar'}
        </LoginButton>
      </form>
      <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
    </Container>
  )
}
