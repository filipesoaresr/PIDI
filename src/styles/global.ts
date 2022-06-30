import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --blue:#276EB9;
        --background: #EBEBEB;
        --shape: #FFFFFF;
        --green: #30C78F;

        --red: #E52E4D;
        //--background: #ECEBF3;

        --blue-light: #6933ff;
        --dark-blue: #194676
        --text-title: #363f5f;
        --text-body: #969cb3;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {

            input {
                padding: 1rem;
            }
            //Quando estiver em uma tela menor que "max-width"
            @media (max-width: 1080px) {
                font-size: 93.75%large; //16px
            }

            @media (max-width: 720px) {
                font-size: 87.5%; //14px
            }
        }

        body {
            
            background: var(--background);
            -webkit-font-smoothing: antialiased;
        
        }

        body, a, div {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }


`;

