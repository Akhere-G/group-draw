import React from "react";
import Shape from "../Shape";
import { Container } from "./styles";

const CanvasArea = ({ drop, shapes, canvasRef }) => {
  return (
    <Container ref={drop}>
      <div ref={canvasRef} />
      {Object.entries(shapes).map(([key, props]) => {
        return <Shape key={key} id={key} {...props} />;
      })}
    </Container>
  );
};

export default CanvasArea;
