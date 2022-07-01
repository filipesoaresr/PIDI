import styled from 'styled-components';
export const Container = styled.div `

    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    background-color: #EBEBEB;
    
    button.getBack {
        position:fixed;
        bottom:10%;
        left: 40px;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        font-size: 1.3rem;
        font-weight: bold;

        margin:0;
        padding:12px 20px;

        border-radius: 5px;
        border-style: none;
        color: #FFFF;
        background: #A63446;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        cursor: pointer;
        }
    }

    button.register {
        position:fixed;
        bottom:10%;
        right: 40px;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        font-size: 1.3rem;
        font-weight: bold;
        margin:0;
        padding:12px 20px;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #30C78F;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

    div#warningNotFound{
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        margin-top: 2.5%;
        margin-bottom: 25%;
        background-color: #F4FFFD;
        border-radius: 10px;
        
        padding:1.5rem 3rem;
        
        p {
            margin-right: 1rem;
            margin-bottom: 0;
            font-weight: bold;
        }

    }

`;

export const OrderIntro = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    margin-top: 5rem;

    h1{
        //margin-left: 7rem;
        font-size: 3rem;
        font-weight: bold;
        
    }

    input {

        width: 20rem;
        height: 2.5rem;

        margin-top: 1rem;

        border-radius: 5px;
        
    }

    button {
        margin-top: 1rem;
        //margin-left: 7.5rem;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        width: 100%;
        height: 3rem;
        color: #fff;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        font-size: 1.3rem;
        font-weight: bold;


        border-radius: 5px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #30C78F;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        cursor: pointer;
        }
    }
`;

export const OrderTable = styled.div `

    
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    //margin-left: 12rem;
    
   
    
    .content-table{
      width: 100%;
      
      border-radius: 10px 10px 2px 2px;
      overflow: hidden;
      border-collapse: collapse;      
      align-items: center;
      text-align: left;
      margin: 1rem 0;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
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
        padding: 28px;
        
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
        background: var(--blue);
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


  #updateButton{
      background-color: var(--blue);
      font-size: 12px;
      font-weight: bold;
      box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
      transition: filter 0.2s;

      &:hover {
      filter: brightness(0.8);
      cursor: pointer;
      }
  }

  #deleteButton{
      background-color: #9A031E;
      font-size: 12px;
      font-weight: bold;
      box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
      transition: filter 0.2s;

      &:hover {
      filter: brightness(0.8);
      cursor: pointer;
      }
  }

  #showButton{
    background-color: #30C78F;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    transition: filter 0.2s;

    &:hover {
    filter: brightness(0.8);
    cursor: pointer;
    }
  }


`;