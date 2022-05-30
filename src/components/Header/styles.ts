import styled from 'styled-components';


export const Container = styled.header `
    background: #16425B;

    margin: 0;

    
`;


export const Content = styled.div `
    max-width: 1320px;

    //Sempre centralizado
    margin: 0 auto;

    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        width: 5rem;
        height: 3rem;
        color: #fff;

        border-radius: 4px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #F28118;

        font-size: 15px;
    }

    img {

        height: 4rem;
        width: 8rem;
        
    }


    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
            padding: 0 1rem;
            text-decoration: none;
            font-size: 0.75rem;
            color: #FFF;
            border: 0;
            border-radius: 0.25rem;
           

            transition: filter 0.2s;

            &:hover {
            filter: brightness(0.7);
            }
        }
    
    a.Login {
        margin-left: 4rem;
    }



`; 