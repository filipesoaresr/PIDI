import  styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EBEBEB;

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
    background: #001021;
    color: #fff;

    width: 60%;
    height: 35rem;

    text-align: center;

    border-radius: 10px;


h1{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: bold;
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

#buttonUpdate{

    width: 20rem;
    height: 2.5rem;
    margin-top: 3rem;
    border-radius: 5px;
    background: #118233;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    
}

#buttonCancel{
    width: 20rem;
    height: 2.5rem;
    margin-top: 3rem;
    background: #C81D25;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
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
`;