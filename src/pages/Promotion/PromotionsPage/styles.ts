import styled from 'styled-components';

export const Container = styled.div`

    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background-color: #EBEBEB;

    button.getBack {
        position:fixed;
        bottom:10%;
        left: 40px;

        font-size: 1.3rem;
        font-weight: bold;

        margin:0;
        padding:12px 20px;

        border-radius: 5px;
        border-style: none;
        color: #FFFF;
        background: #A63446;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        cursor: pointer;
        }
    }

    button.register {
        position:fixed;
        bottom:10%;
        right: 40px;

        margin:0;
        padding:12px 20px;
        font-size: 1.3rem;
        font-weight: bold;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #24AC15;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

    div#warningNotFound{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 2.5%;
        margin-bottom: 25%;
        background-color: #F4FFFD;
        border-radius: 10px;
        
        padding:1.5rem 3rem;
        
        p {
            margin-right: 1rem;
            margin-bottom: 0;
            font-weight: bold;
        }

    }
`;

export const PromoIntro = styled.div`

    display: block;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  
    

    margin-top: 5rem;
    margin-bottom: 3rem;

    h1{
        margin-left: 4rem;
        font-size: 3rem;
        font-weight: bold;
    }

    input {

        width: 25rem;
        height: 2.5rem;
        margin-top: 2rem;

        border-radius: 5px;
        
    }

    button {
        margin-top: 2rem;
        //margin-left: 4rem;

        width: 100%;
        height: 3rem;
        color: #fff;

        font-size: 1.3rem;
        font-weight: bold;

        border-radius: 5px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #8190A4;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }


`;

export const PromoDisplay = styled.div`

    width: 70%;
    //height: 100%;

    margin: 0 auto;
    margin-bottom: 5rem;


    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    justify-items: center;
`;

