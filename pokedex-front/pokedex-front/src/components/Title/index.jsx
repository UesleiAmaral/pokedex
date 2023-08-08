import { ContainerTitle } from "./style";

export const Title = (props) => {
  const myProps = { ...props };
  const number = `${myProps.id}`;
  return (
    <ContainerTitle {...props}>
      <span>#0{number.padStart(4, "0")}</span> {myProps.title}
    </ContainerTitle>
  );
};
