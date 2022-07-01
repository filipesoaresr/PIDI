import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBlock = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  margin-top: 6rem;
 
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 3rem 6rem;
  background: #194676;

  border-radius: 15px;
  color: #fff;

  align-items: center;

  input {
    margin-bottom: 1rem;

    border-radius: 5px;
    height: 2rem;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0rem 3rem;

  #createUser {
    //margin-left: 35px;
  }

  button {
    margin-top: 1rem;

    background: var(--green);
    color: #fff;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    font-weight: bold;
    font-size: 1rem;

    border-radius: 5px;
    //margin-left: 2.7rem;
    padding: 0.5rem 3rem;
    //width: 60%;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  a {
    //margin-left: 1.6rem;
    //margin-right: 1.3rem;

    font-size: 1rem;

    color: #fff;
    text-decoration: none;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const UserImage = styled.div`
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 10px;
    //margin-left: 25px;
  }
`;
