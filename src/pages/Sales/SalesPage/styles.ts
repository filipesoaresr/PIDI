import styled from 'styled-components';

export const Container = styled.div `

    display: block; 
    justify-content: center;
    align-items: center; 
    width: 100%;
    margin-bottom: 5rem;
    
    

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

export const Form = styled.form `


   width: 40rem;
   height: 20rem;
   border-radius: 10px;
   margin-left: 42rem;
   margin-top: 10rem;
   margin-right: 7rem;
   
   
    

    background: #16425B;
    color: #fff;


`;


export const SalesIntro = styled.div `

    display: block;
    justify-content: center;
    align-items: center;

    margin-left: 5rem;
    margin-top: 5rem; 
    padding-top: 2rem;

    h1{
        
        margin-bottom: 4rem;
        margin-left: 2rem;
    }

    input {

        width: 20rem;
        height: 1.8rem;
        border-radius: 5px;
        margin-left: 5rem;
    }

    p{
        margin-top: 1rem;
        margin-bottom: -0.3rem;
        margin-left: 5rem;
    }

    button {
        margin-top: 2rem;
        //margin-left: 7.5rem;

        width: 25rem;
        height: 2rem;
        color: #fff;

        border-radius: 5px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #F28118;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }
`;

