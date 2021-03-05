import React from "react";
import styled from "styled-components";
import { ControlBar } from "../components/controlBar";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { ToDoListIcon } from "../components/toDoListIcon";
import { PageNav } from "../components/pageNav";
import { Prompt } from "../components/prompt";

const WorkStyles = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
  }
`;

const Work = () => {
  return (
    <WorkStyles>
      <TopNav />
      <Prompt message="How long do you want to work?" />
      <div className="timer">
        <Timer />
      </div>
      <div className="controls">
        <ControlBar />
      </div>
      <PageNav number={1} left="" right="/break" />
      <ToDoListIcon />
    </WorkStyles>
  );
};

export { Work };
