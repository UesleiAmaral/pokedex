
import { getPokemons } from "../server/connection";
import "./App.css";
import { Card } from "./components/Card";

export const App = ()=> {
  getPokemons();


  return (
    <>
      <Card/>
    </>
  );
}

