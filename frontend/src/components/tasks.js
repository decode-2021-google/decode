import React from "react";
import styled from "styled-components";

const TaskStyles = styled.button`
  width: 80%;
  display: block;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 20px 20px 20px 20px;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 1.2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s all ease 0.1s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.3s all ease 0.1s;
  }
`;

const Task = (props) => {
  return <TaskStyles>{props.children}</TaskStyles>;
};

export { Task };
