import axios from "axios";

export const getPokemons = async () => {
  const pokemons = await axios
    .get("http://localhost:3030/pokemons")
    .then((res) => res.data)
    .catch((error) => console.log(error));
  
  return pokemons;
};
