import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #E5FF00;
    /* --primary-color: #E5FF00; #A6FB89 */
    --secondary-color: #FF620D;
    --white: #FFFFFF;
    --hover: #3C52D9;
    --green: #2EF2FF;
    /* --black: #363636; */
    --black: #000;
    /* --gray: #808080; */
    --gray: #dbdbdb;
    --yellow: #FFDD57;
    --blue: #162162;
    --brown: #2E2B2C;
    --red: #ED474A;
    --pink: #D4AFCD;
    --orange: #F05D23;
  }

  body {
    background: linear-gradient(rgba(0, 0, 0, .93), rgba(0, 0, 0, .9)), url('https://images.pexels.com/photos/4793467/pexels-photo-4793467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`

export default GlobalStyles