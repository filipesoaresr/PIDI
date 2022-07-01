import styled from "styled-components";

export const Container = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #EBEBEB;

`;

export const FormBlock = styled.div `
   
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SecondSection = styled.section `
    margin-left: 2rem;
    margin-top: 3rem;
    
`;

export const Form = styled.form `
    //display: flex;
    //justify-content: center;
    //align-items: center;

    text-align: center;

    margin-top: 5rem;
    margin-bottom: 2rem;

    background: #194676;
    color: #fff;

    width: 80%;
   

    border-radius: 5px;


    h1 {
        margin-top: 2rem;
        font-size: 3rem;
        font-weight: bold;
    }

    p {
        margin-top: 0.5rem;
    }

    input {
        width: 15rem;
        height: 2rem;
        border-radius: 5px;
    }

    select {
        width: 15rem;
        height: 2rem;
        border-radius: 5px;
        margin-bottom: 1rem;

    }


    #buttonRegister{

        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        font-size: 1.3rem;
        font-weight: bold;

        width: 20rem;
        margin-top: 5rem;
        margin-bottom: 2rem;

        border-radius: 5px;
        border-style: none;

        padding: 0.8rem 4rem;
        background: #30C78F;
        color: #fff;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
        
    }

    #buttonCancel{
        width: 20rem;

        margin-top: 5rem;
        margin-bottom: 2rem;

        padding: 0.8rem 4rem;
        cursor: pointer;

        border-radius: 5px;
        border-style: none;
        background: #9A031E;
        color: #fff;
        font-size: 20px;
        font-weight: bold;

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
    
    p{
        margin-right: 2rem;
    }

`;


export const AddProductSection = styled.section `
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;

    background:#CDD7DA;

    padding: 2rem;
    border-radius: 8px;  

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
        background-color: #1F5976;
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

    #actionsColumn{
        text-align: center;
        vertical-align: middle;
    }


    #addProductButton{
        background-color: var(--green);
        font-weight: bold;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

    #deleteProductButton{
        background-color: #9A031E;
        font-weight: bold;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }
    
    
    #searchButton{
        width: 10%;
        background: #2738A9;
        color: white;
        margin-top: 2rem;
        border-radius: 5px;
    }

    h5{
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        color: black;
        font-Size: 2rem;
        font-weight: bold;
    }
    

    
    `;
