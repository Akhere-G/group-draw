import { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../types";

const useCanvas = () => {
  const [shapes, setShapes] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const canvasRef = useRef();

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
        const initialCanvasPosition = canvasRef.current.getClientRects()[0];

        const mousex = mouse.x - initialCanvasPosition.x;
        const mousey = mouse.y - initialCanvasPosition.y;
        addShape(mousex, mousey, item.type);
      },
    }),
    [addShape, mouse]
  );

  return { shapes, drop, canvasRef };
};

export default useCanvas;
