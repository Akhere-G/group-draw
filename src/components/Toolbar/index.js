import React from "react";
import { Container, Tools, ToolIcon } from "./styles";
import { ShapeTypes } from "../../types";
import Shape from "../Shape";

const Toolbar = ({ drop }) => {
  return (
    <Container ref={drop}>
      <h2>Toolbar</h2>
      <hr />
      <Tools>
        <ToolIcon>
          <Shape type={ShapeTypes.CIRCLE} />
        </ToolIcon>
        <ToolIcon>
          <Shape type={ShapeTypes.TRIANGLE} />
        </ToolIcon>
        <ToolIcon>
          <Shape type={ShapeTypes.SQUARE} />
        </ToolIcon>
      </Tools>
    </Container>
  );
};

export default Toolbar;
