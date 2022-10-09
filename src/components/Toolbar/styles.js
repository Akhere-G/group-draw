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
