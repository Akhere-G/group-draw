import React from "react";
import { ItemTypes, ShapeTypes } from "../../types";
import { Circle, Triangle, Square } from "./styles";
import { useDrag } from "react-dnd";

const Shape = ({ id, left, top, type, canEdit }) => {
  const [_, drag] = useDrag(
    () => ({
      type: ItemTypes.SHAPE,
      item: { id, left, top, type, canEdit },
    }),
    [id, left, top]
  );

  let ShapeEl;
  switch (type) {
    case ShapeTypes.CIRCLE:
      ShapeEl = Circle;
      break;
    case ShapeTypes.SQUARE:
      ShapeEl = Square;
      break;
    case ShapeTypes.TRIANGLE:
      ShapeEl = Triangle;
      break;
  }

  return <ShapeEl ref={drag} top={top} left={left} />;
};

export default Shape;
