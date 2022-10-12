import { useEffect } from "react";
import { Container, Wrapper } from "./styles";
import { Toolbar, CanvasArea } from "./components";
import useCanvas from "./hooks/useCanvas";

function App() {
  const { drop, shapes, canvasRef } = useCanvas();

  return (
    <Container>
      <Wrapper>
        <Toolbar />
        <CanvasArea drop={drop} shapes={shapes} canvasRef={canvasRef} />
      </Wrapper>
    </Container>
  );
}

export default App;
