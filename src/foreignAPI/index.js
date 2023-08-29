import 'dotenv/config';
import axios from "axios";
import { createPokemon } from '../dataBase/dbModel.js';

const URL_API = `https://pokeapi.co/api/v2/pokemon`;

//const count = 1281;
const count = 10;

export const updateDataBase  = async () => {

  for (let i = 1; i <= count; i++) {
    console.log(`Update Item ID 0${i} from ${URL_API}/${i}/`);

    const data = axios.get(`${URL_API}/${i}/`)
      .then((res) => {
        return res.data;
      })

      createPokemon(await data, false);

  };

};
