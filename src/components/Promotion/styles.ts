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


    //border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    //padding: 30px;
    margin: 20px;
    //width: 400px;
    transition: all 0.3s ease-out;


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
    //background: #4F759B;
    cursor: pointer;

    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    }

    .iconsImage{

        &:hover {
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            transform: scale(1.3);
        }
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