import styled from 'styled-components';


export const Product = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 1.15rem;
    margin-bottom: 20px;
    img{
        border-radius: 10%;
        height: 70px;
        width: 80px;
        margin-right: 15px;
    }
    ion-icon{
        font-size: 30px;
        color: #d5d6d6;
    }
`

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        font-weight: 700;
        width: 180px;
        color: #fcd12c;
    }
`
export const Button = styled.button`
  all: unset;
  width: 75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 20px 25px;
  font-size: 1.3rem;
  color: #22272b;
  background-color: #fcd12c;
  border-radius: 30px;
  cursor: pointer;
`
export const CupomInput = styled.input`
    all: unset;
    width: 85%;
    height: 58px;
    background-color: #D5D6D6;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 15px;
    margin-bottom: 15px;
`
export const CupomButton = styled.button`
    all: unset;
    position: absolute;
    background-color: #fcd12c;
    height: 43px;
    width: 90px;
    text-align: center;
    border-radius: 50px;
    position: absolute;
    right: 0;
    margin: 9px 45px;
`
export const CupomContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;


`
export const Prices = styled.div`
    width: 100vw;
    color: #fcd12c;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        width: 85vw;
        padding: 10px 0 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #fcd12c;
    }
    div:last-child{
        border-bottom: 0; 
    }

`
export const Footer = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Products = styled.div`
    overflow: scroll;
    height: 100vw;
    width: 90vw;
`