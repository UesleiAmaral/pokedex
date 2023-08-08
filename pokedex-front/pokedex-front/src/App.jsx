
import styled from "styled-components";
import "./App.css";
import { Card } from "./components/Card";

const ContainerApp = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1rem 0;

`;

export const App = ()=> {


  return (
    <ContainerApp>
      <Card/>
    </ContainerApp>
  );
}

