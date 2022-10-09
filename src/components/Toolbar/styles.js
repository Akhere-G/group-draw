import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  flex-grow: 0.5;
  background-color: #dedede;
`;

export const Tools = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const ToolIcon = styled.li`
  padding: 0.5rem;
  &:hover {
    background-color: #999;
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 100%;
`;

export const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid black;
`;
