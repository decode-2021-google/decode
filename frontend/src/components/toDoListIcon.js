import React from "react";
import { Icon } from "@iconify/react";
import taskListF from "@iconify/icons-jam/task-list-f";
import styled from "styled-components";

const IconStyles = styled.div`
  .todo-icon {
    position: fixed;
    left: 2rem;
    bottom: 2rem;
    color: #ffffff;
    width: 60px;
    height: 60px;
  }
`;

const ToDoListIcon = () => {
  return (
    <IconStyles>
      <Icon icon={taskListF} class="todo-icon" />
    </IconStyles>
  );
};

export { ToDoListIcon };
