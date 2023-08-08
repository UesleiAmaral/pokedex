import { ContainerCard } from "./style";
import { Title } from "../Title";
import { LinkImage } from "../LinkImage";
import { Section } from "../Section";
import { Li } from "../Li";


import axios from "axios";
import { useState, useEffect } from "react";

export const Card = () => {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      await axios
        .get("http://localhost:3030/pokemons")
        .then((res) => setListing(res.data))
        .catch((error) => console.log(error));
    };

    getPokemons();
  }, []);

  return (
    <>
      {listing.map((pokemon) => (
        <ContainerCard
          key={pokemon.id}
          backgroundColor={pokemon.types[0].colors.primaryColor}
          borderColor={pokemon.types[0].colors.borderColor}
        >
          <Title
            title={pokemon.name}
            backgroundColor={pokemon.types[0].colors.secondaryColor}
            id={pokemon.id}
          />
          <LinkImage
            backgroundColor={pokemon.types[0].colors.secondaryColor}
            image={pokemon.image}
          />
          <Section
            backgroundColor={pokemon.types[0].colors.secondaryColor}
            title={"Abilities"}
            height={"80px"}
          >
            <ul>
              {pokemon.abilities.map((item, i) => (
                <Li key={i}>{item}</Li>
              ))}
            </ul>
          </Section>

          <Section
            backgroundColor={pokemon.types[0].colors.secondaryColor}
            title={"Type"}
          >
            <ul>
              {pokemon.types.map((item, i) => (
                <Li
                  key={i}
                  backgroundColorLi={item.colors.primaryColor}
                  borderColorLi={item.colors.secondaryColor}
                >
                  <span>{item.name}</span>
                </Li>
              ))}
            </ul>
          </Section>
        </ContainerCard>
      ))}
    </>
  );
  /*    return (
      <ContainerCard>
                  <SectionStats stats={pokemon.stats.map((elem) => elem + " ")} />

      <LinkImage />
      </ContainerCard>
    );*/
};
