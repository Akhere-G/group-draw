import { useState, useEffect } from "react";
import { v5 as uuid } from "uuid";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../types";

const useCanvas = () => {
  const [shapes, setShapes] = useState([]);

  const addShape = (left, top, type) => {
    setShapes((prev) => [...prev, { id: uuid(), left, top, type }]);
  };

  const [_, drop] = useDrop(
    () => ({
      accept: ItemTypes.SHAPE,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        addShape(item.id, left, top, item.type);
        return undefined;
      },
    }),
    [addShape]
  );

  return { shapes, drop };
};

export default useCanvas;
