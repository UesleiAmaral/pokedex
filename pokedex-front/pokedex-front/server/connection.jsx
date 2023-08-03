import axios from "axios";

export const getPokemons = () => {
  axios
    .get("http://localhost:3030/pokemons")
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
};
