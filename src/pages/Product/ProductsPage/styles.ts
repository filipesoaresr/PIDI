import styled from 'styled-components';


export const Container = styled.div `

    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
    margin-bottom: 5rem;
    

    button.register {
        position:fixed;
        bottom:10%;
        right: 40px;

        margin:0;
        padding:12px 20px;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #F28118;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

`;

export const ProductIntro = styled.div `

    display: block;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    //margin-left: 10%;
    margin-top: 5%;

    h1{
        margin-left: 7rem;
        
    }

    input {

        width: 25rem;
        height: 1.8rem;

        margin-top: 2rem;

        border-radius: 5px;
        
    }

    button {
        margin-top: 2rem;
        margin-left: 3rem;
        margin-right: auto;

        width: 80%;
        color: #fff;

        border-radius: 5px;
        border-style: solid 1.5px;

        //padding: 1rem 10rem;
        background: #F28118;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }
`;

export const ProductTable = styled.div `

    
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    //margin-left: 12rem;
    
   
    
  table{
      border: 1.5px solid;
      width: 100%;
      align-items: center;
      text-align: left;
      margin-left: auto;
      margin-right: auto;
      //margin-left: 10%;
    }

    th, td {
        padding: 22px;
        text-align: left;
    }

    td{
        font-size: 18px;
    }

    th {
        background-color: #FF9947;
        font-size: 24px;
        color: black;
    }

    tr:hover {background-color:  #F58C36;}

  #updateButton{
      background-color: blue;
  }

  #deleteButton{
      background-color: red;
  }

  #divTable{
    overflow-x:auto;
}
   

`;