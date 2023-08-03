import { LinkImage } from "../LinkImage";
import { ContainerCard } from "./style";
import { ContainerAbilities } from "../SectionAbilities/style";
export const Card = () => {
  return (
    <ContainerCard>
      <h1>bulbasaur</h1>
      <LinkImage />

      <ContainerAbilities>
        <p>Overgrow</p>
        <p>chlorophyll</p>
      </ContainerAbilities>

      <div>
        {/* section stats */}
        <p>
          hp <span>45</span>
        </p>
        <p>
          attack <span>49</span>
        </p>
      </div>
      <div>
        {/* section types */}
        <p>grass</p>
        <p>poison</p>
      </div>
    </ContainerCard>
  );
};
