import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  height: 473px;

  padding: 0 2rem;
label{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;

  }

  input{
    height: 4vh;
    border-radius: 5px;
    font-size: 18px;
    outline: none;

    border: 1px solid #40c4b9;
  }
`;