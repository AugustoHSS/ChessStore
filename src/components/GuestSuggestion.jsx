import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function GuestSuggestion({ show }) {
  const navigate = useNavigate()
  function handleGuestSignUp() {
    navigate('/sign-up')
  }

  return (
    <>
      {show ? (
        <Container>
          <h1>
            Não possui uma conta?
            <br />
            Comece a comprar já!
          </h1>
          <Button onClick={() => handleGuestSignUp()}>Cadastre-se</Button>
        </Container>
      ) : (
        <></>
      )}
    </>
  )
}

const Container = styled.div`
  width: 250px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  padding: 20px 20px;

  h1 {
    color: #d5d6d6;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
  }
`
const Button = styled.button`
  all: unset;

  transition: background-color 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px 20px;

  font-size: 1rem;
  font-weight: 400;

  color: #22272b;
  background-color: #fcd12c;
  border-radius: 20px;

  :hover {
    transition: background-color 0.4s;
    background-color: #bba139;
    cursor: pointer;
  }
`
