import styled from "styled-components";

export const ContainerLi = styled.li`
  background-color: ${(props) => props.backgroundColorLi || "#ffff"};
  font-size: 14px;
  padding: 7px;

  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColorLi || "none"};


`;
