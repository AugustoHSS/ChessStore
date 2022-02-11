import { Container, Header, GuestSuggestion } from '../../components'
import { cartIcon, gridIcon, arrowBack, logoutIcon } from '../../assets/'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {
  Image,
  Item,
  ItemsContainer,
  Sidebar,
  TopSidebar,
  Logout,
  GuestContainer,
} from './styles'
import useAuth from '../../hook/useAuth'

export default function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState(null)
  const [showSidebar, setShowSidebar] = useState(false)
  const { username, token, guest, setGuest, setToken, setUsername } = useAuth()

  useEffect(() => {
    const promise = api.getProducts(token)

    promise.then((response) => {
      setProducts(response.data)
      setGuest(false)
    })
    promise.catch((error) => {
      setProducts(error.response.data)
    })
  }, [token])

  function handleClickProduct(id) {
    navigate(`/home/${id}`)
  }

  function handleLogout() {
    setToken('')
    setUsername('')
    setGuest(true)
    navigate('/sign-in')
  }

  return (
    <Container>
      <Header>
        <img
          onClick={() => setShowSidebar(!showSidebar)}
          src={gridIcon}
          alt="Grid icon"
        />
        <h1>Chess Store</h1>
        <img onClick={() => navigate('/cart')} src={cartIcon} alt="Cart icon" />
      </Header>

      <Sidebar show={showSidebar}>
        {guest ? (
          <GuestContainer show={showSidebar}>
            <img
              onClick={() => setShowSidebar(false)}
              src={arrowBack}
              alt="Arrow back icon"
            />
            <GuestSuggestion show={showSidebar} />
          </GuestContainer>
        ) : (
          <>
            <TopSidebar show={showSidebar}>
              <h1>Olá {username}</h1>
              <img
                onClick={() => setShowSidebar(false)}
                src={arrowBack}
                alt="Arrow back icon"
              />
            </TopSidebar>
            <Logout onClick={() => handleLogout()} show={showSidebar}>
              <img src={logoutIcon} alt="Logout Icon" />
              <p>Logout</p>
            </Logout>
          </>
        )}
      </Sidebar>

      <ItemsContainer>
        {products?.map((product) => (
          <Item
            onClick={() => handleClickProduct(product._id)}
            key={product._id}
          >
            <Image image={product.image} />
            <h2>{product.name}</h2>
            <p> R$ {product.price.toFixed(2)}</p>
          </Item>
        ))}
      </ItemsContainer>
    </Container>
  )
}
