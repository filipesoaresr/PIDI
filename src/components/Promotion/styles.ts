import styled from 'styled-components';

export const Container = styled.div `
    width: 18rem;
    height: 14rem;
    background-color: var(--blue);
    //background:  #1F5976;
    color: #fff;
    border-radius: 25px;
    padding: 7%;
    padding-top: 2.5rem;

    h4 {
        font-size: 1.3rem;
    }

    p {
        font-size: 0.7rem
    }

    p.discount{
        font-size: 1.7rem;
        font-weight: bold;
        font-style: bold;
        color: #30C78F;

        margin-top: 0.2rem;
    }

    transition:  0.3s;

    &:hover {
    background: #4F759B;
    cursor: pointer;
    }

    #icons {

        margin-top: 10%;
        margin-bottom: 15%;
        padding: 10%;
        

        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    TiTrash{
        width: 6rem ;
        height: 6rem ;
    }
`;


// azul clarin - #00ABE7
//4F759B