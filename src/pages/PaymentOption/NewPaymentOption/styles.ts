import  styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    button {

        width: 20rem;
        margin-top: 2rem;
        padding:12px 40px;

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

    h1{
            margin-top: -2rem;
            margin-bottom: 2rem;
            font-size: 3rem;
            font-weight: bold;
        }    

    text-align: center;

    width: 60%;
   
    

    background: #001021;
    color: #fff;

    border-radius: 10px;
    padding: 5rem;

    margin-top: 2rem;
    margin-bottom: 5rem;

    #buttonCancel{
        background: #C81D25;
        font-size: 20px;
        font-weight: bold;
    }

    #buttonRegister{
        background: #118233;
        font-size: 20px;
        font-weight: bold;
    }

    

`;

export const  FormPaymentBlock = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const MainSection = styled.div `

    margin-right: 2rem;
    padding: 2rem;


    input {
        margin-top: 0.3rem;
        width: 20rem;
        height: 2rem;

        border-radius: 5px;
    }
    select {
        margin-top: 0.5rem;
        width: 20rem;
        height: 2rem;

        border-radius: 5px;
    }

    p {
        margin-top: 1rem;
        margin-left: 0;
        font-size: 1.2rem;
        
    }

    input.size-qtd {
        width: 2.7rem;
        height: 1.4rem;

        margin-left:-0.1rem;
    }

   
`;

export const ImageSection = styled.div `
    margin-right: 2rem;
    margin-top: 3rem;

    width: 25rem;
    height: 25rem;

    background: white;
    border-radius: 5px;

    p {
        margin-top: 1rem
    }

    input#image-input {
        margin-top: 10rem;
    }
`;