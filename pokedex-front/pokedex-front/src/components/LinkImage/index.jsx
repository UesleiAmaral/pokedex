import { ContainerImage } from "./style";

export const LinkImage = (props) => {
  const myProps = { ...props };
  
  return (
    <ContainerImage {...props}>
      <img
        src={myProps.image}
        alt=""
      />
    </ContainerImage>
  );
}