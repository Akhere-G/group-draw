import { Container, Wrapper } from "./styles";
import { Toolbar, CanvasArea } from "./components";
function App() {
  return (
    <Container>
      <Wrapper>
        <Toolbar />
        <CanvasArea />
      </Wrapper>
    </Container>
  );
}

export default App;
