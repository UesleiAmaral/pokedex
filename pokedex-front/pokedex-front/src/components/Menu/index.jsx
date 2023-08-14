import { ContainerNavbar } from "./style"

export const Menu = (props) => {
  const myProps = { ...props };

  return (
    <ContainerNavbar>
      {myProps.children}
    </ContainerNavbar>
  ); 
}