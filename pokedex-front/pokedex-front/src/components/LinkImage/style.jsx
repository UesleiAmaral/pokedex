import { styled } from "styled-components";

export const ContainerImage = styled.figure`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 219px;
  background-color: ${(props) => props.backgroundColor || "#BF4F74"};
  border-radius: 10px;
  border: none;
  img {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;
