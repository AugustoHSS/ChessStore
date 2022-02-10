import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0px;

  z-index: 1;

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 10px;
  background-color: #22272b;

  h1 {
    color: #d5d6d6;
    font-size: 1.3rem;
    font-weight: 400;
  }

  img {
    width: 30px;
    height: 30px;

    :hover {
      cursor: pointer;
    }
  }
`

export default Header
