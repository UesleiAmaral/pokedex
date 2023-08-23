import styled from "styled-components";

export const ContainerAllCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  padding: 0 2rem;

  input {
    position: absolute;
    top: 30px;
    right: 400px;
    padding: 2px 10px;
    width: 20rem;
    border-radius: 5px;
    border: 1px solid #737be9;
    outline: none;
    box-shadow: none;

    font-size: 18px;

  }

  ::placeholder{
    font-size: 16px;
  }

`;