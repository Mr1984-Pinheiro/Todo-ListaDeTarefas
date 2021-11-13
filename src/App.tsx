import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/item";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar sonhos de vida também", done: false },
  ]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  );
};

export default App;
