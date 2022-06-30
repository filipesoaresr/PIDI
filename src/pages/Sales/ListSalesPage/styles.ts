import styled from 'styled-components';

export const Container = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #EBEBEB;
    width: 100%;
    height: 100%;
    min-height: 100vh;


`;

export const MainSection  = styled.section `

        text-align: center;

        margin-top: 5rem;
        margin-bottom: 2rem;
        background-color: #272838;
        //background: #001021;
        color: #fff;

        width: 80%;


        border-radius: 5px;


     h1 {
        margin-top: 2rem;
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
    }

    #buttonCancel{
        width: 20rem;

        margin-top: 5rem;
        margin-bottom: 2rem;

        padding: 0.8rem 4rem;
        cursor: pointer;

        font-weight: bold;
        font-size: 1.5rem;

        border-radius: 5px;
        background: #9A031E;
        color: #fff;
    }

`;

export const SalesTable  = styled.section `

    
    display: grid ;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;

    background:#CDD7DA;

    padding: 2rem;
    border-radius: 8px;


        Label{
            display: inline-block;
            font-size: 1.5rem;
            color: black;
            font-weight: 550; 
        }
    
        #dateInput{
            width: 100%;
            height: 2.5rem;
            border-radius: 3px;
            font-size: 1.2rem;
        }

        #periodTotalInput{
            display: block;
            margin: auto;
            width: 15%;
            height: 2.5rem;
            border-radius: 3px;
            font-size: 1.2rem;
            
        }

    p#totalValue {
        color: black;
        font-weight: bold;
        font-size: 2rem;
    }


    .content-table{
      width: 100%;
      border-radius: 10px 10px 2px 2px;
      overflow: hidden;
      border-collapse: collapse;      
      align-items: center;
      text-align: left;
      margin: 2rem 0;
      //margin-left: 10%;
    }

    .content-table thead tr{
        background-color: var(--blue);
        //background-color: #1F5976;
        font-size: 24px;
        text-align: center;
        color: white;
    }

    .content-table th, 
    .content-table td {
        padding: 20px;
        
    }

    .content-table tbody tr{
        border-bottom: 1px solid #dddddd;
    }

     .content-table td{
        font-size: 15px;
        text-align: center;
        font-weight: bold;
    }

    .content-table th{
        font-size: 22px;
        text-align: center;
    }

    .content-table tbody tr.active-row {
         font-weight: bold;
         color: #009879;
    }

    tr:nth-of-type(even){
        background-color: #f3f3f3;
    }

    tbody tr:last-of-type{
        border-bottom: 2px solid #1F5976;
    }

    tr:hover {background-color:  #D5DFE5;}


    h5{
        margin-top: 1rem;
        color: black;
        font-Size: 2rem;
        font-style: bold;
    }
`;

export const FormBlock = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const InitialDateSection = styled.section `
    margin-right: 25rem;
    margin-top: 3rem;
`;


export const EndDateSection = styled.section `
    margin-left: 2rem;
    margin-top: 3rem;
    
`;

