import styled from "styled-components"

export const StyledNav = styled.nav`
    background-color: ${({theme}) => theme.colors.nav};

    ul {
        list-style-type: none;
        display: inline-flex;

        li {
            padding: 0 20px;

            a {
                text-decoration: none;
                border-radius: 20px;
                background-color: #E8985E;
                padding: 10px 20px;
                color: #262A10;
                font-family: sans-serif;
                box-shadow: -10px 3px 26px -9px rgba(0,0,0,0.78);
                -webkit-box-shadow: -10px 3px 26px -9px rgba(0,0,0,0.78);
                -moz-box-shadow: -10px 3px 26px -9px rgba(0,0,0,0.78);
            }

            a:hover {
                background-color: #A9714B;
            }

            a:active {
                padding: 15px 25px;
            }
        }
    }
   
`