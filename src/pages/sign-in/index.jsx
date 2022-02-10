import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { Container, data } from './styles';
import LoginButton from '../../components/LoginButton';
import Logo from '../../assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = axios.post('http://localhost:5000/sign-in', {
      email,
      password,
    });
    promise.then(() => { navigate('/home'); setIsLoading(false); });
    promise.catch((error) => { alert(error.response.data); setIsLoading(false); });
  }
  return (
    <Container>
      <img src={Logo} alt="" />
      <h1>Chess Store</h1>
      <form onSubmit={login}>
        <Input type="email" value={email} disabled={isLoading} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
        <Input type="password" value={password} disabled={isLoading} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <LoginButton>{isLoading ? <data.Component {...data.props} /> : 'Cadastrar'}</LoginButton>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}
