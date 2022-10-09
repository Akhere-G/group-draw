import React from "react";
import { Container, Tools, ToolIcon, Circle, Triangle, Square } from "./styles";
const Toolbar = ({ drop }) => {
  return (
    <Container ref={drop}>
      <h2>Toolbar</h2>
      <hr />
      <Tools>
        <ToolIcon>
          <Circle />
        </ToolIcon>
        <ToolIcon>
          <Triangle />
        </ToolIcon>
        <ToolIcon>
          <Square />
        </ToolIcon>
      </Tools>
    </Container>
  );
};

export default Toolbar;
