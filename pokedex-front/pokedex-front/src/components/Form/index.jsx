import { ContainerForm } from "./style";

export const Form = () => {
  return (
    <ContainerForm>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
        />
      </label>

      <label htmlFor="image">
        image
        <input
          type="text"
          name="image"
          id="image"
        />
      </label>

      <label htmlFor="abilities">
        abilities
        <input
          type="text"
          name="abilities"
          id="abilities"
        />
      </label>

      <label htmlFor="stats">
        stats
        <input
          type="text"
          name="stats"
          id="stats"
        />
      </label>

      <label htmlFor="types">
        types
        <input
          type="text"
          name="types"
          id="types"
        />
      </label>
    </ContainerForm>
  );
};
