import { useState, useEffect, useRef, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../types";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

const useCanvas = () => {
  const [shapes, setShapes] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const canvasRef = useRef();

  const addShapeLocally = useCallback((left, top, type) => {
    setShapes((prev) => [...prev, { id: uuid(), left, top, type }]);
  }, []);

  const broadcastNewShape = useCallback(async (left, top, type) => {
    await socket.emit("add_shape", { left, top, type });
  }, []);

  useEffect(() => {
    window.addEventListener("drop", (e) => {
      setMouse({ x: e.pageX, y: e.pageY });
    });
  }, []);

  useEffect(() => {
    socket.on("receive_shape", ({ left, top, type }) => {
      addShapeLocally(left, top, type);
    });
  }, []);

  const [_, drop] = useDrop(
    () => ({
      accept: ItemTypes.SHAPE,
      drop(item, monitor) {
        const CanvasPosition = canvasRef.current.getClientRects()[0];

        // drop position relative to viewport
        const absoluteDropPosition = monitor.getSourceClientOffset();

        // drop position relative to canvas
        const relativeDropPosition = {
          x: absoluteDropPosition.x - CanvasPosition.x,
          y: absoluteDropPosition.y - CanvasPosition.y,
        };

        addShapeLocally(
          relativeDropPosition.x,
          relativeDropPosition.y,
          item.type
        );
        broadcastNewShape(
          relativeDropPosition.x,
          relativeDropPosition.y,
          item.type
        );
      },
    }),
    [addShapeLocally, broadcastNewShape, mouse]
  );

  return { shapes, drop, canvasRef };
};

export default useCanvas;
