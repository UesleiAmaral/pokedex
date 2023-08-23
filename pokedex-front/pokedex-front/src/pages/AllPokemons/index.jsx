import { Card } from "../../components/Card";
import { ContainerAllCard } from "./style";

import axios from "axios";
import { useState, useEffect } from "react";

export const AllPokemons = () => {
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
    <>
      <ContainerAllCard>
    
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search Pokemon"
        />
        <Card pokemons={pokemon} />
      </ContainerAllCard>
    </>
  );
};
