import  styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #EBEBEB;

    button {

        width: 20rem;
        margin-top: 2rem;
        padding:12px 40px;

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

export const FormBlock = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Form = styled.form `
    
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 5rem;
    background: #194676;
    color: #fff;

    width: 60%;
    height: 40rem;

    text-align: center;

    border-radius: 10px;


h1{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: bold;
    }   

p {
    margin-top: 1rem;
    font-size: 1.2rem;
}

input {
    width: 15rem;
    height: 2rem;
    border-radius: 5px;
}

select {
    width: 100%;
    height: 2rem;

    border-radius: 5px;

}

#buttonUpdate{
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    font-size: 1.3rem;
    font-weight: bold;

    border-radius: 5px;
    border-style: none;

    //padding: 1rem 10rem;
    background: #30C78F;

    transition: filter 0.2s;

    &:hover {
    filter: brightness(0.8);
    cursor: pointer;
    }
}

#buttonCancel{
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    background: #9A031E;
    font-size: 1.3rem;
    font-weight: bold;

    border-radius: 5px;
    border-style: none;

    transition: filter 0.2s;

    &:hover {
    filter: brightness(0.8);
    cursor: pointer;
    }
}

`;

export const MainSection = styled.section `
    margin-right: 2rem;
    margin-top: 3rem;
`;


export const SecondSection = styled.section `
    margin-left: 2rem;
    margin-top: 3rem;
`;