import React from "react";
import Shape from "../Shape";
import { Container } from "./styles";

const CanvasArea = ({ drop, shapes }) => {
  return (
    <Container ref={drop}>
      {Object.entries(shapes).map(([key, value]) => {
        const { left, top, type } = value;
        return <Shape key={key} id={key} left={left} top={top} type={type} />;
      })}
    </Container>
  );
};

export default CanvasArea;
