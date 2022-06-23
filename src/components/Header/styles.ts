import styled from 'styled-components';


export const Container = styled.header `
    background: #001021;

    margin: 0;

    
`;


export const Content = styled.div `
    max-width: 1420px;

    //Sempre centralizado
    margin: 0 auto;

    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6{
        font-size: 1rem;
        font-weight: bold;
    }

    button{
        width: 5rem;
        height: 3rem;
        color: #fff;

        border-radius: 4px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #022DC9;

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

    #entrarButton{
        background-color: #062FC1;
    }

    #sairButton{
        background-color: #C20808;
    }



`; 