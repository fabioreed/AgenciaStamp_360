import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #E5FF00;
    /* --primary-color: #E5FF00; #A6FB89  #1679DC */
    --secondary-color: #FF620D;
    --white: #FFFFFF;
    --hover: #3C52D9;
    --green: #2EF2FF;
    /* --black: #363636; */
    --black: #121214;
    --gray: #dbdbdb;
    --yellow: #FFDD57;
    --blue: #162162;
    --brown: #2E2B2C;
    --red: #ED474A;
    --pink: #D4AFCD;
    --orange: #F05D23;
  }

  body {
    background: linear-gradient(rgba(18, 18, 20, 1), rgba(18, 18, 20, 1)), url('');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`

export default GlobalStyles