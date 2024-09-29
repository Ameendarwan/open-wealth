import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: soleil, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif !important;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  html,
  body {
    height: 100%;
  }

  h1 {
    font-size: 3.8rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
