import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Menu } from "../components/Menu";
import { Home } from "../pages/Home";
import { AllPokemons } from "../pages/AllPokemons";
import { CreateCard } from "../pages/CreateCard";

const ContainerApp = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1rem 0;
`;

export const Root = () => {
  return (
    <ContainerApp>
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="AllPokemons"
            element={<AllPokemons />}
          />

          <Route
            path="CreateCard"
            element={<CreateCard />}
          />
        </Routes>
      </Router>
    </ContainerApp>
  );
};
