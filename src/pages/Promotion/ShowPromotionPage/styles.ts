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
    margin-left: 8rem;
    margin-top: 3rem;
    
    text-align: left;

    input{
        float: right;
        margin-left: 0.5rem;
    }
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
        font-size: 1.5rem;
        margin-top: 0.5rem;
        
       
    }
    #discount{  
        color: var(--green);
        font-weight: bold;
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

    }


    #buttonRegister{

        width: 20rem;

        margin-top: 5rem;
        margin-bottom: 2rem;

        padding: 0.8rem 4rem;
        cursor: pointer;

        border-radius: 5px;
        background: #118233;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        
    }

    #buttonCancel{
        width: 20rem;

        margin-top: 5rem;
        margin-bottom: 2rem;

        padding: 0.8rem 4rem;
        cursor: pointer;

        border-radius: 5px;
        background: #9A031E;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }



`;

export const MainSection = styled.section `
    
    margin-left: 6rem;
    margin-right: 4rem;
    margin-top: 3rem;
    text-align: left;

    input{
        float: right;
        margin-left: 0.5rem;
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
        background-color: var(--blue);
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
        width: 10%;
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
        margin-bottom: 1rem;
        color: black;
        font-Size: 2rem;
        font-style: bold;
    }
    
    `;
