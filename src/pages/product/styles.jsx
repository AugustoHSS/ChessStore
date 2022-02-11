import styled from 'styled-components'

const ProductContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`
const PathText = styled.span`
  padding-left: 20px;

  font-size: 0.8rem;
  font-weight: 400;

  color: #7d7e80;

  b {
    font-weight: 400;
    color: #d5d6d6;
  }
`
const SlideShow = styled.div`
  width: 100%;
  height: 320px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  overflow-x: scroll;
`
const Image = styled.div`
  width: 90%;
  height: 250px;

  background-image: ${(props) =>
    props.image ? `url(${props.image})` : 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 15px;
`
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  width: 100%;
  padding: 0px 20px;

  font-size: 1.2rem;
  font-weight: 700;

  h2 {
    width: 220px;
    color: #d5d6d6;
  }
  p {
    color: #fcd12c;
    font-weight: 700;
  }
`
const StockDetails = styled.div`
  padding-left: 20px;

  font-size: 1rem;
  font-weight: 400;

  color: ${(props) => (props.stock ? '#00B288' : '#CA0B0B')};
`
const Details = styled.p`
  padding: 10px 20px;

  text-align: justify;
  font-size: 1rem;
  font-weight: 400;

  color: #7d7e80;
`
const Button = styled.button`
  all: unset;

  transition: background-color 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 20px;
  padding: 20px 25px;

  font-size: 1.3rem;
  font-weight: 400;

  color: #22272b;
  background-color: #fcd12c;
  border-radius: 20px;

  img {
    width: 30px;
    height: 30px;
  }

  :hover {
    transition: background-color 0.4s;
    background-color: #bba139;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
  }
`

const ButtonGuest = styled.button`
  all: unset;

  transition: background-color 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 20px;
  padding: 20px 25px;

  font-size: 1.3rem;
  font-weight: 400;

  color: #22272b;
  background-color: #fcd12c;
  border-radius: 20px;

  img {
    width: 30px;
    height: 30px;
  }

  :hover {
    transition: background-color 0.4s;
    background-color: #bba139;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
  }
`

export {
  ProductContainer,
  PathText,
  SlideShow,
  PriceContainer,
  StockDetails,
  Details,
  Button,
  Image,
  ButtonGuest,
}
