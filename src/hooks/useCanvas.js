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
      drop(item) {
        const initialCanvasPosition = canvasRef.current.getClientRects()[0];

        const mouseX = mouse.x - initialCanvasPosition.x;
        const mouseY = mouse.y - initialCanvasPosition.y;
        addShapeLocally(mouseX, mouseY, item.type);
        broadcastNewShape(mouseX, mouseY, item.type);
      },
    }),
    [addShapeLocally, broadcastNewShape, mouse]
  );

  return { shapes, drop, canvasRef };
};

export default useCanvas;
