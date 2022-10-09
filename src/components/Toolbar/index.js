import React, { useEffect, useRef, useState } from "react";
import { Container, Tools, ToolIcon } from "./styles";
import { ShapeTypes } from "../../types";
import Shape from "../Shape";
import { v4 as uuid } from "uuid";

const Toolbar = () => {
  return (
    <Container>
      <h2>Toolbar</h2>
      <hr />
      <Tools>
        <ToolIcon>
          <Shape id={uuid()} type={ShapeTypes.CIRCLE} />
        </ToolIcon>
        <ToolIcon>
          <Shape id={uuid()} type={ShapeTypes.TRIANGLE} />
        </ToolIcon>
        <ToolIcon>
          <Shape id={uuid()} type={ShapeTypes.SQUARE} />
        </ToolIcon>
      </Tools>
    </Container>
  );
};

export default Toolbar;
