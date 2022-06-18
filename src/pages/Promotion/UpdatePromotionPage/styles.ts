import styled from "styled-components";

export const Container = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const FormBlock = styled.div `
   
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SecondSection = styled.section `
    margin-left: 2rem;
    margin-top: 3rem;
    
`;

export const Form = styled.form `
    //display: flex;
    //justify-content: center;
    //align-items: center;

    text-align: center;

    margin-top: 5rem;
    margin-bottom: 2rem;

    background: #16425B;
    color: #fff;

    width: 80%;
   

    border-radius: 5px;


    h3 {
        margin-top: 2rem;
    }

    p {
        margin-top: 0.5rem;
    }

    input {
        width: 15rem;
        height: 1.5rem;
        border-radius: 5px;
    }

    select {
        width: 15rem;
        height: 1.5rem;

        border-radius: 5px;

    }


    button#form-btn{

        width: 20rem;

        margin-top: 5rem;
        margin-bottom: 2rem;

        padding: 0.8rem 4rem;
        cursor: pointer;

        border-radius: 5px;
        background: green;
        color: #fff;
        
    }

    #buttonCancel{
        width: 20rem;

        margin-top: 5rem;
        margin-bottom: 2rem;

        padding: 0.8rem 4rem;
        cursor: pointer;

        border-radius: 5px;
        background: #E8563A;
        color: #fff;
    }

`;

export const MainSection = styled.section `
    margin-right: 2rem;
    margin-top: 3rem;
    
    p{
        margin-right: 2rem;
    }

`;


export const AddProductSection = styled.section `
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;

    background: #F28118;

    padding: 2rem;
    border-radius: 8px;    

    input{
        margin-top: 1rem;
    }

    h5{
        margin-top: 1rem;
        font-style: bold;
    }

    button{
        margin-top: 1rem;
        margin-left: 1rem;
        width: 20%;
        height: 20%;
        border-radius: 5px;

    }

    table {
        color: #fff;
        margin-top: 2rem;
    }

    th {
        font-size: 20px;
        padding: 1rem;
    }

    #searchButton{
        width: 10%;
        background: blue;
        color: white;
        margin-top: 2rem;
    }

    #addProductButton{
        width: 30%;
        background: green;
    }

    #deleteProductButton{
        width: 30%;
        background: red;
    }

    
    `;
