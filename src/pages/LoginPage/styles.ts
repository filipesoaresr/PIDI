import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginBlock = styled.div `

    margin-top: 8rem;

    padding: 5rem 6rem;
    background: #16425B;

    border-radius: 5px;
    color: #fff;

    align-items: center;

    input {
        margin-bottom: 2rem;

        border-radius: 5px;
        height: 1.6rem;
    }

   
`;




export const ButtonsBlock = styled.div `
     
     display: block;
     align-items: center;
     justify-content: center;
     
     button {
        margin-top: 2rem;
 

        background: #F28118;
        color: #fff;

        border-radius: 5px;
        margin-left: -20px;
        padding: 0.5rem 2rem;
        width: 100%;

        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7);
        }

    }

    a {
        margin-left: 1.6rem;
        margin-right: 1.3rem;

        font-size: 0.7rem;

        color: #fff;
        text-decoration: none;

        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7);
        }

    }
`;

export const UserImage = styled.div `

    align-items: center;
     
     img{
         width: 10rem;
         height: 10rem;
         margin-bottom: 10px ;
     }
     
`;