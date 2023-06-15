import styled from "styled-components"

export const StyledCard = styled.div`
    
    margin-top: 2rem;
    margin-right: 2rem;
    width: 400px;
    min-height: 400px;

    background-color: white;
    border: 1px solid #dedede;
    border-radius: 50px;
    padding: 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: all .2s ease-in-out; 
    text-align: center;
    
    p {
        font-family: sans-serif;
    }
    img {
        width: 150px;
        padding: 50px 50px;
        min-width: 40px;
        max-width: 80px;
    }
    

    &:hover { transform: scale(1.1); 
    }
   
   

`
