import { styled } from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${(props) => props.backgroundColor || "#fffff"};
  padding: 1rem;
  border-radius: 5px;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    height: ${(props) => props.height || "none"};
  }
`;
