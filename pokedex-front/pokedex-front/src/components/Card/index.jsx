import { ContainerCard } from "./style";
import { Title } from "../Title";
import { LinkImage } from "../LinkImage";
import { Section } from "../Section";
import { Li } from "../Li";


export const Card = (props) => {

  const myProps = {...props};

  return (
    <>
      {myProps.pokemons.map((pokemon) => (
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
            height={"96px"}
          >
            <ul>
              {pokemon.abilities.map((item, i) => (
                <Li
                  key={i}
                  borderColorLi={"black"}
                >
                  {item}
                </Li>
              ))}
            </ul>
          </Section>

          <Section
            backgroundColor={pokemon.types[0].colors.secondaryColor}
            title={"Type"}
            height={"56px"}
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

};
