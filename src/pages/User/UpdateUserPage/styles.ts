import  styled from 'styled-components';

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

export const Form = styled.form `
    //display: flex;
    //justify-content: center;
    //align-items: center;

    text-align: center;

    margin-top: 5rem;
    background: #16425B;
    color: #fff;

    width: 50rem;
    height: 35rem;

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
        width: 100%;
        height: 1.5rem;

        border-radius: 5px;

    }

    button#form-btn{

        width: 20rem;

        margin-top: 5rem;
        padding: 0.8rem 4rem;
        cursor: pointer;

        border-radius: 5px;
        background: #42EB32;
        color: #fff;
        
    }

    #buttonCancel{
        width: 20rem;

        margin-top: 5rem;
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
`;


export const SecondSection = styled.section `
    margin-left: 2rem;
    margin-top: 3rem;
    

    button#AddProduct-btn {
        
        cursor: pointer;
        padding: 0.5rem;

        border-radius: 5px;
        background: #F28118;
        color: #fff;

        height:1.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

    }
`;