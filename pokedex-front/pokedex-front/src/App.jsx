import axios from "axios";
import { useState, useEffect } from "react";

import { Card } from "./components/Card";
import styled from "styled-components";
import "./App.css";
import { Menu } from "./components/Menu";

const ContainerApp = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1rem 0;
`;

export const App = () => {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3030/pokemons/${value}`)
      .then((res) => setPokemon(res.data));
  }, [value]);

  return (
    <ContainerApp>
      <Menu>
        <ul>
          <li>
            {" "}
            <input
              type="text"
              value={value}
              onChange={handleChange}
            />
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Type</li>
          <li>Abilities</li>
        </ul>
      </Menu>

      <Card pokemons={pokemon} />
    </ContainerApp>
  );
};
