import { ContainerNavbar } from "./style";
import { Link } from "react-router-dom";

export const Menu = () => {

  return (
    <ContainerNavbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AllPokemons">All Pokemons</Link>
        </li>
        <li>
          <Link to="/CreateCard">Create You Card</Link>
        </li>
      </ul>
    </ContainerNavbar>
  ); 
}