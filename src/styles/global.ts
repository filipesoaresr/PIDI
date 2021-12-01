import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f8f2f5;
        --shape: #FFFFFF;
        --green: #33cc95;

        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
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

