import styled from "styled-components";

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 100%;
  position: ${({ left, top }) => (left && top ? "absolute" : "static")};
  left: ${({ left }) => left + "px"};
  top: ${({ top }) => top + "px"};
`;

export const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  position: ${({ left, top }) => (left && top ? "absolute" : "static")};
  left: ${({ left }) => left + "px"};
  top: ${({ top }) => top + "px"};
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid black;
  position: ${({ left, top }) => (left && top ? "absolute" : "static")};
  left: ${({ left }) => left + "px"};
  top: ${({ top }) => top + "px"};
`;
