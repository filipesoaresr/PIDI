import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBlock = styled.form`
  margin-top: 8rem;
  margin-bottom: 2rem;
  margin-left: 2rem;

  padding: 3rem 6rem;
  background: #001021;

  border-radius: 5px;
  color: #fff;

  align-items: center;

  input {
    margin-bottom: 2rem;

    border-radius: 5px;
    height: 2rem;
  }
`;

export const ButtonsBlock = styled.div`
  display: block;
  align-items: center;
  justify-content: center;

  #createUser {
    margin-left: 35px;
  }

  button {
    margin-top: 1rem;

    background: #24AC15;
    color: #fff;

    font-weight: bold;
    font-size: 1.3rem;

    border-radius: 5px;
    margin-left: 2.7rem;
    padding: 0.5rem 0.5rem;
    width: 60%;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  a {
    margin-left: 1.6rem;
    margin-right: 1.3rem;

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
    margin-left: 25px;
  }
`;
