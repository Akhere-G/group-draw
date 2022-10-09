import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../types";

const useCanvas = () => {
  const [shapes, setShapes] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const addShape = (left, top, type) => {
    setShapes((prev) => [...prev, { id: uuid(), left, top, type }]);
  };

  useEffect(() => {
    window.addEventListener("drop", (e) => {
      setMouse({ x: e.pageX, y: e.pageY });
    });
  }, []);

  const [_, drop] = useDrop(
    () => ({
      accept: ItemTypes.SHAPE,
      drop(item) {
        addShape(mouse.x, mouse.y, item.type);
      },
    }),
    [addShape, mouse]
  );

  return { shapes, drop, mouse };
};

export default useCanvas;
