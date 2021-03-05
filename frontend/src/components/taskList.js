import React from "react";
import styled from "styled-components";
import { Task } from "./tasks";

const TaskListStyles = styled.div`
  .listBox {
    position: absolute;
    width: 300px;
    height: 300px;
    bottom: 6rem;
    left: 2rem;
    background-color: rgba(136, 153, 172, 0.7);
    border-radius: 30px;

    .listHeader {
      width: 80%;
      padding: 1rem 2rem 1rem 2rem;
      display:flex;
      justify-content: space-between;
    }

    .listHeader h3{
      color: white;
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
          <h3>Add new task</h3> 
          <h3>+</h3>
        </div>
        <div className="btn-container">
          <Task>Clean room </Task>
          <Task>Finish coding</Task>
          <Task>Practice presentation</Task>
        </div>
      </div>
    </TaskListStyles>
  );
};

export { TaskList };
