import React from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { PageNav } from "../components/pageNav";
import { Prompt } from "../components/prompt";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TaskList } from "../components/taskList";
import { useAnimation } from "framer-motion"

const BreakStyles = styled.div``;

const Break = (props) => {
  const controls = useAnimation();

  return (
    <BreakStyles>
      <TopNav user={props.user} isSignedIn={props.isSignedIn}/>
      <Prompt message="How long do you want to break?" />
      <Timer controls={controls} />
      <PageNav left="/work" right="/categories" number={2} />
      <ToDoListIcon />
      <TaskList />
    </BreakStyles>
  );
};

export { Break };
