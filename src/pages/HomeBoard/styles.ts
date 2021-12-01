import styled from 'styled-components';

export const Container = styled.div `

    margin-top: 6rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;


    img {
        width: 800px;
        height: 400px;

        margin: 2rem;
    }

`;

export const HomeIntro = styled.div `

    max-width: 60%;

    display: grid;
    grid-template-columns: 1fr;

    margin: 4rem;


    h5 {
        font-size: 2rem;

        margin-bottom: 3rem;

    }

    button {

        width: 15rem;
        height:3rem;

        
        background: #F28118;
        border-radius: 5px;
        color: #FFF;
        border: none;

        
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }

    }
`;