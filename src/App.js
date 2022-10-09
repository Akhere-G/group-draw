import { Container, Wrapper } from "./styles";
import { Toolbar, CanvasArea } from "./components";
import useCanvas from "./hooks/useCanvas";

function App() {
  const { drop, shapes, mouse, CanvasRef } = useCanvas();

  return (
    <Container>
      <Wrapper>
        <Toolbar />
        <CanvasArea drop={drop} shapes={shapes} CanvasRef={CanvasRef} />
      </Wrapper>
    </Container>
  );
}

export default App;
