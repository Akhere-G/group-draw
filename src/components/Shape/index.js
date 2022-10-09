import React from "react";
import { ItemTypes, ShapeTypes } from "../../types";
import { Circle, Triangle, Square } from "./styles";
import { useDrop, useDrag } from "react-dnd";

const Shape = ({ id, left, top, type }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.SHAPE,
      item: { id, left, top, type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
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

  if (isDragging) {
    return <ShapeEl ref={drag} top={top} left={left} />;
  }

  return <ShapeEl ref={drag} top={top} left={left} />;
};

export default Shape;
