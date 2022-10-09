import React from "react";
import { ShapeTypes } from "../../types";
import { Circle, Triangle, Square } from "./styles";

const Shape = ({ type }) => {
  switch (type) {
    case ShapeTypes.CIRCLE:
      return <Circle />;
    case ShapeTypes.SQUARE:
      return <Square />;
    default:
      return <Triangle />;
  }
};

export default Shape;
