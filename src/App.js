import { Container, Wrapper } from "./styles";
import { Toolbar, CanvasArea } from "./components";
import useCanvas from "./hooks/useCanvas";

function App() {
  const { drop, shapes } = useCanvas();
  return (
    <Container>
      <Wrapper>
        <Toolbar drop={drop} />
        <CanvasArea />
      </Wrapper>
    </Container>
  );
}

export default App;
