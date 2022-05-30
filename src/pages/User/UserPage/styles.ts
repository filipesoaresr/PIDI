import styled from 'styled-components';


export const Container = styled.div `

    display: block; 
    justify-content: center;
    align-items: center; 
    width: 100%;


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

export const UserIntro = styled.div `

    display: block;
    justify-content: center;
    align-items: center;

    margin-left: 50rem;
    margin-top: 5rem;

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
        //margin-left: 7.5rem;

        width: 25rem;
        height: 2rem;
        color: #fff;

        border-radius: 5px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #F28118;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }
`;

export const UserTable = styled.div `

    //display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    
   
    
    table{
      border: 5px solid;
      width: 70%;
      margin-left: 20rem;
      
  }

  td{
      max-width: 40px;
  }

  #updateButton{
      background-color: blue;
      margin-bottom: 0.7rem;
  }

  #deleteButton{
      background-color: red;
  }
  
  #cpfColumn{
      width: 10rem;
  }

  #nomeColumn{
      width: 18rem;
  }

  #loginColumn{
      width: 12rem;
  }

  #telefoneColumn{
      width: 10rem;
  }

  #dateColumn{
      width: 12rem;
  }

  #actionsColumn{
      width: 10rem;
  }


   
`;