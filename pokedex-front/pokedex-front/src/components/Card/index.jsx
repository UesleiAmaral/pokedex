import { LinkImage } from "../LinkImage";
import { ContainerCard } from "./style";
import { SectionAbilities } from "../SectionAbilities";
import { SectionStats } from "../SectionStats";
import { SectionTypes } from "../SectionTypes";
import { Title } from "../Title";


export const Card = () => {
  return (
    <ContainerCard>
      <Title />
      <LinkImage />
      <SectionAbilities />
      <SectionStats />
      <SectionTypes />
    </ContainerCard>
  );
};
