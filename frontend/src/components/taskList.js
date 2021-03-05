import React from "react";
import styled from "styled-components";
import { Task } from "./tasks";

const TaskListStyles = styled.div`
  .listBox {
    display: flex;
    position: absolute;
    width: 500px;
    height: 50px;
    bottom: 1rem;
    left: 1rem;
    background-color: rgba(136, 153, 172, 0.7);
    border-radius: 30px;

    .listHeader {
      padding: 1rem 2rem 1rem 2rem;
      display:flex;
      justify-content: space-between;
    }

    .tasks {
      display: block;
    }
  }
`;

const TaskList = () => {
  return (
    <TaskListStyles>
      <div className="listBox">
        <div className="listHeader">
          <p>Add new task</p> 
          <p>+</p>
        </div>
        <div className="tasks">
          <Task>First Task</Task>
          <Task>First Task</Task>
          <Task>First Task</Task>
        </div>
      </div>
    </TaskListStyles>
  );
};

export { TaskList };
