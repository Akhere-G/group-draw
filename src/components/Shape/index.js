import React from "react";
import { ItemTypes, ShapeTypes } from "../../types";
import { Circle, Triangle, Square } from "./styles";
import { useDrop, useDrag } from "react-dnd";

const Shape = ({ id, left, top, type }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.SHAPE,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  switch (type) {
    case ShapeTypes.CIRCLE:
      return <Circle ref={drag} />;
    case ShapeTypes.SQUARE:
      return <Square ref={drag} />;
    default:
      return <Triangle ref={drag} />;
  }
};

export default Shape;
