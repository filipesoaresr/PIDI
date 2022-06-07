import styled from 'styled-components';

export const Container = styled.div `

    display: block; 
    justify-content: center;
    align-items: center; 
    width: 100%;
    margin-bottom: 5rem;

    #backButton{
        display: flex;
        margin:auto;
        width: 20%;
        border-radius: 5px;
        color: #FFFF;
        background: #F28118;
        font-size:2.5rem;
        text-align: center;
        justify-content: center;
    }
    

    button.register {
        position:fixed;
        bottom:10%;
        right: 40px;

        margin:0;
        padding:12px 20px;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #F28118;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

`;

export const ErrorIntro = styled.div `

    
    justify-content: center;

    margin-left: 5rem;
    margin-top: 5rem;

    h1{
        text-align: center;
        font-size: 5rem;
    }

    h3{
        text-align: center;
    }
`;


