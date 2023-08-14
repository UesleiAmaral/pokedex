import { styled } from "styled-components";

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
width: 300px;
background-color: ${(props) => props.backgroundColor || "#BF4F74"};
padding:1rem;
border: 2px solid ${(props) => props.borderColor || "#000000"};
border-radius: 10px;

`;