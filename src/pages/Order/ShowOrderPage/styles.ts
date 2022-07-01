import styled from 'styled-components';

export const Container = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EBEBEB;
    width: 100%;
    height: 100%;

`;

export const FormBlock = styled.div `
   
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SecondSection = styled.section `
    margin-left: 2rem;
    margin-top: 3rem;

    label{
        margin-right: 2rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    p{
        margin-right: 2rem;
        font-size: 1.2rem;
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
   
    padding: 4rem;
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
        height: 1.5rem;
        border-radius: 5px;
    }

    input.size-qtd {
        width: 2.7rem;
        height: 1.6rem;
    }


    select {
        width: 15rem;
        height: 1.5rem;

        border-radius: 5px;

    }



    #registerSaleButton{

        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        font-size: 1.3rem;
        font-weight: bold;

        width: 20rem;
        margin-top: 5rem;
        margin-bottom: 2rem;

        border-radius: 5px;
        

        padding: 0.8rem 4rem;
        background: #30C78F;
        color: #fff;

        border-style: none;

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

    label{
        margin-right: 2rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    p{
        margin-right: 2rem;
        font-size: 1.2rem;
    }

`;


export const AddProductSection = styled.section `
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;

    background:#CDD7DA;

    padding: 6rem;
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
          text-align: center;
          margin-left: 2rem;
      }
  
  
      .content-table tbody tr{
        text-align: center;
          border-bottom: 1px solid #dddddd;

          p{
            margin-left: 4rem;
          }
      }
  
       .content-table td{
          font-size: 15px;
          text-align: left;
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
        background-color: #569B06;
    }

    #deleteProductButton{
        background-color: #C81D25;
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
        color: black;
        font-Size: 2rem;
        font-style: bold;
    }
    

   
    `;

