import { createGlobalStyle } from 'styled-components'
import { useTheme } from 'styled-components'

console.log(useTheme(), 'current theme')

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: var(--font-family-body);
  }
*, *::before, *::after {
    box-sizing: inherit;
    Margin:0;
    Padding:0;
    Border:0; 
}
body{
  background-color: yellow;
}
`
export default GlobalStyles
