import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font: inherit;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  a{
      font-style: none;
  }
  b{
    font-weight:700;
    color: #fcd12c;
  }
  button {
    cursor: pointer;
  }
`
