import { styled } from "styled-components";

export const ContainerImage = styled.figure`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
 
  background-color: ${(props) => props.backgroundColor || "#BF4F74"};
  border-radius: 10px;
  border: none;
  img {
    padding: 20px;
    height: 100%;
  }
`;
