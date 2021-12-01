import styled from 'styled-components';

export const Container = styled.div `

    //display: block;
    //justify-content: center;
    //align-items: center;

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

export const PromoIntro = styled.div `

    //display: block;
    //margin-left: 38%;
    //margin-right: 50%;
    display: table;
    margin: 0 auto;
    

    margin-top: 5rem;
    margin-bottom: 5rem;

    h1{
        margin-left: 7rem;
        
    }

    input {

        width: 25rem;
        height: 1.8rem;

        margin-top: 2rem;

        border-radius: 5px;
        
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

export const PromoDisplay = styled.div `

    width: 70%;
    //height: 100%;

    margin: 0 auto;
    margin-bottom: 5rem;


    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    justify-items: center;
`;

