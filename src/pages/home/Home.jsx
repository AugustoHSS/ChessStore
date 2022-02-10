import { Container, Header } from '../../components'
import { cartIcon, gridIcon, arrowBack, logoutIcon } from '../../assets/'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Image,
  Item,
  ItemsContainer,
  Sidebar,
  TopSidebar,
  Logout,
} from './styles'

export default function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState(null)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const promise = api.getProducts()

    promise.then((response) => setProducts(response.data))
    promise.catch((error) => console.log(error.response))
  }, [])

  function handleClickProduct(id) {
    navigate(`/home/${id}`)
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
        <TopSidebar show={showSidebar}>
          <h1>Olá Fulano</h1>
          <img
            onClick={() => setShowSidebar(false)}
            src={arrowBack}
            alt="Arrow back icon"
          />
        </TopSidebar>
        <Logout onClick={() => navigate('/sign-in')} show={showSidebar}>
          <img src={logoutIcon} alt="Logout Icon" />
          <p>Logout</p>
        </Logout>
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
