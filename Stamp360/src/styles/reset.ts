import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    list-style: none;
    text-decoration: none;

    /* font-family: 'Poppins', sans-serif; */
    font-family: 'Inter', sans-serif;
  }
`

export default ResetStyles