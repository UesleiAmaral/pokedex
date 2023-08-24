import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Container } from "./style"

export const CreateCard = () => {
  const card = [{
    id: 0,
    name: 'teste',
    image: '',
    abilities: [],
    stats:[{name:'', base_stat:''}],
    types:[{name: '', colors: ''}]
  }]
  return (
    <Container>
      <h1>Create Card</h1>
      <section>
      <Card pokemons={card} />
      <Form />
      </section>
    </Container>
  );
}