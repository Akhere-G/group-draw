import React from "react";
import Shape from "../Shape";
import { Container } from "./styles";

const CanvasArea = ({ drop, shapes, canvasRef }) => {
  return (
    <Container ref={drop}>
      <div ref={canvasRef} />
      {Object.entries(shapes).map(([key, value]) => {
        const { left, top, type } = value;
        const actualLeft = left + canvasRef.current.getClientRects()[0].x;
        const actualTop = top + canvasRef.current.getClientRects()[0].y;
        return <Shape key={key} id={key} left={left} top={top} type={type} />;
      })}
    </Container>
  );
};

export default CanvasArea;
