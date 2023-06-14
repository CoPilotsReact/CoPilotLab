
import {createGlobalStyle} from 'styled-components'
import Font from "./Play/Play-Regular.woff";


//TODO: Fix how to import a font??
export const GlobalStyles = createGlobalStyle `
@font-face {
    font-family: Play-Regular;
    src: url(${Font}) format("woff")
}

p {
    font-family: Play-Regular;
    color: black;
}
`


