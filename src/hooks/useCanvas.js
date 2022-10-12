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

  const addShapeLocally = useCallback((newShape) => {
    setShapes((prev) => [...prev, newShape]);
  }, []);

  const broadcastNewShape = useCallback(async (newShape) => {
    await socket.emit("add_shape", newShape);
  }, []);

  const editShapeLocally = useCallback((newShape) => {
    setShapes((prev) =>
      prev.map((item) => {
        if (item.id === newShape.id) {
          return newShape;
        }
        return item;
      })
    );
  }, []);

  const broadcastEditedShape = useCallback(async (newShape) => {
    await socket.emit("edit_shape", newShape);
  }, []);

  useEffect(() => {
    window.addEventListener("drop", (e) => {
      setMouse({ x: e.pageX, y: e.pageY });
    });
  }, []);

  useEffect(() => {
    socket.on("receive_shape", (newShape) => {
      addShapeLocally(newShape);
    });
    socket.on("receive_shape_to_edit", (newShape) => {
      editShapeLocally(newShape);
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

        let newShape = {
          id: item.id,
          left: relativeDropPosition.x,
          top: relativeDropPosition.y,
          type: item.type,
          canEdit: true,
        };

        if (item.canEdit) {
          editShapeLocally(newShape);
          broadcastEditedShape(newShape);
        } else {
          addShapeLocally(newShape);
          broadcastNewShape(newShape);
        }
      },
    }),
    [addShapeLocally, broadcastNewShape, mouse]
  );

  return { shapes, drop, canvasRef };
};

export default useCanvas;
