import { ContainerLi } from "./style";

export const Li = (props) => {
  const myProps = { ...props };
  return <ContainerLi {...props}>{myProps.children}</ContainerLi>;
};
