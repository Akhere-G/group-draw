import React, { useState, useEffect } from "react";
import Shape from "../Shape";
import { Container } from "./styles";

const CanvasArea = ({ drop, shapes, canvasRef }) => {
  const [canvasPosition, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);

  return (
    <Container ref={drop}>
      <div ref={canvasRef} />
      {Object.entries(shapes).map(([key, value]) => {
        const { left, top, type } = value;
        const actualLeft = left + canvasRef.current.getClientRects()[0].x;
        const actualTop = top + canvasRef.current.getClientRects()[0].y;
        return (
          <Shape
            key={key}
            id={key}
            left={actualLeft}
            top={actualTop}
            type={type}
          />
        );
      })}
    </Container>
  );
};

export default CanvasArea;
