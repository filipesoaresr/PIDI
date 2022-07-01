import styled from 'styled-components';

export const Container = styled.div `

    margin-top: 4rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;


    img {
        width: 900px;
        height: 500px;

        //margin: 2rem;
        margin-right: 4rem;
    }

`;

export const HomeIntro = styled.div `

    max-width: 60%;

    display: grid;
    grid-template-columns: 1fr;

    margin: 5rem;



    h5 {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #272838;
    }

    #title {
        color: var(--green);
    }

    p {
        font-size: 2rem;
        line-height: 2.3rem;
    }

    button {
        
        text-align: center;
        justify-content: center;
        margin-left: 5remrem;
        margin-top: 2rem;

        width: 20rem;
        height:3.5rem;

        font-size: 1.5rem;
        font-weight: bold;
        
        background: var(--green);
        border-radius: 5px;
        color: #FFF;
        border: none;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }

    }
`;