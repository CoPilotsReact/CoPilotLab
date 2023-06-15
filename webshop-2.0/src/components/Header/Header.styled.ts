import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;

    .sticky {
        position: fixed;
        top: 0;
        width: 100%
    }

    padding: 20px 20px;
    img {
        padding: 0 20px;
    }

    .logo {
        background-color: white;
        padding: 20px 20px;
        width: 10%;
    }

    .cart {
        display: flex;
        justify-content: right;
        background-color: white;
        padding: 20px 20px;
        width: 10%;
        img {
            width: 35px;
            height: 35px;
        }

    }
`


