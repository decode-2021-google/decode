import React from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { PageNav } from "../components/pageNav";
import { Prompt } from "../components/prompt";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TaskList } from "../components/taskList";
 
const BreakStyles = styled.div``;

const Break = () => {
  return (
    <BreakStyles>
      <TopNav />
      <Prompt message="How long do you want to break?" />
      <Timer />
      <PageNav left="/work" right="/categories" number={2} />
      <ToDoListIcon />
      <TaskList />
    </BreakStyles>
  );
};

export { Break };
