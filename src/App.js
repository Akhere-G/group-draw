import { Container, Wrapper } from "./styles";
import { Toolbar, CanvasArea } from "./components";
import useCanvas from "./hooks/useCanvas";
import io from "socket.io-client";

function App() {
  const socket = io.connect("http://localhost:8000");
  const { drop, shapes, canvasRef } = useCanvas(socket);

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
