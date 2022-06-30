import styled from 'styled-components';


export const Container = styled.header `
    //background: #2D7DD2;
    margin: 0;

    background: var(--blue);
    position: sticky;   

    top: 0; 
    //background: #272838;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    //#33658A
    
`;


export const Content = styled.div `
    max-width: 1795px;

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
        width: 4rem;
        
    }


    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:70%;

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
        font-size: 0.7rem;
        font-weight: bold;
        height: 2rem;
        width: 5rem;
    }

    #sairButton{
        margin-left: 5rem;
        background-color: #9A031E;
        font-size: 0.7rem;
        font-weight: bold;
        height: 2rem;
        width: 5rem;
        //font-weight: bold;
    }



`; 