import { Container, Header } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { arrowBack, cartIcon } from '../../assets'

export default function Product() {
  const navigate = useNavigate()
  const { productId } = useParams()
  const [productData, setProductData] = useState(null)
  console.log(productId)
  console.log(productData)

  useEffect(() => {
    const promise = api.getProduct(productId)
    promise.then((response) => setProductData(response.data))
    promise.catch((error) => console.log(error.response))
  }, [])

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
    </Container>
  )
}
