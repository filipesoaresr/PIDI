import styled from 'styled-components';

export const Container = styled.div `

    display: flex; 
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;

    background-color: #EBEBEB;
    

    button.register {
        position:fixed;
        bottom:10%;
        right: 40px;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        font-size: 1.3rem;
        font-weight: bold;
        margin:0;
        padding:12px 20px;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #30C78F;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

`;

export const Form = styled.form `

   margin-top: 10rem;
   margin-bottom: 5rem;
   width: 30%;
   height: 30rem;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   //background-color: #272838;
   background: #194676;
   color: #fff;
   padding: 2rem;
   box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

`;


export const SalesIntro = styled.div `

    display: grid;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    

    h1{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bold;
    }

    input {

        display: block;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 2rem;
        border-radius: 5px;

    }

    p{
        margin-top: 1rem;
    }
`;

