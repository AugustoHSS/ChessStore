import styled from 'styled-components'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 240px;

  width: ${(props) => (props.show ? '200px' : '0px')};
  min-height: 100vh;

  padding: ${(props) => (props.show ? '10px 10px' : '0px')};

  position: fixed;
  left: 0px;
  top: 0pc;
  z-index: 2;
  transition: width 0.2s;

  background-color: #22272b;
  border-radius: 5px;
  border-right: ${(props) => (props.show ? '1px' : '0px')} solid #fcd12c;
`

const TopSidebar = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    color: #d5d6d6;
    font-size: 1.2rem;
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
const Logout = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;

  img {
    width: 30px;
    height: 30px;

    :hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 1rem;
    color: #d5d6d6;
    :hover {
      cursor: pointer;
    }
  }
`

const ItemsContainer = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`
const Item = styled.li`
  width: 160px;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  position: relative;

  padding: 5px 5px;

  background-color: #31363c;
  border-radius: 15px;

  h2 {
    color: #d5d6d6;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }

  p {
    position: absolute;
    bottom: 5px;

    color: #d5d6d6;
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
  }

  :hover {
    cursor: pointer;
  }
`
const Image = styled.div`
  width: 100%;
  height: 100px;

  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`
export { Sidebar, TopSidebar, ItemsContainer, Item, Image, Logout }
