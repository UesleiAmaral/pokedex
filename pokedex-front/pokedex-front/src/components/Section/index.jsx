import { ContainerSection } from "./style";

export const Section = (props) => {
  const myProps = { ...props };


  return (
    <ContainerSection {...props}>
      <p>{myProps.title}</p>
      {myProps.children}
    </ContainerSection>
  );
};
