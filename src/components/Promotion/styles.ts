import styled from 'styled-components';

export const Container = styled.div `
    width: 15rem;
    height: 14rem;

    background:  #16425B;
    color: #fff;
    border-radius: 5px;
    padding: 2rem;


    p {
        font-size: 0.7rem
    }

    p.discount{
        font-size: 1.2rem;
        font-style: bold;
        color: #F28118;

        margin-top: 0.3rem;
    }

    transition:  0.2s;

    &:hover {
    background: #4F759B;
    cursor: pointer;
    }

    TiTrash{
        width: 6rem ;
        height: 6rem ;
    }
`;


// azul clarin - #00ABE7
//4F759B