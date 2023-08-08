import styled from "styled-components";

export const ContainerLi = styled.li`
  background-color: ${(props) => props.backgroundColorLi || "#ffff"};

  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColorLi || "none"};


  span{
    color: #1f1e1e;
    text-decoration: none;
  }

`;
