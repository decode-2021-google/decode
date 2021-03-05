import React from "react";
import styled from "styled-components";
import { ControlBar } from "../components/controlBar";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { ToDoListIcon } from "../components/toDoListIcon";

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
      <div className="timer">
        <Timer />
      </div>
      <div className="controls">
        <ControlBar />
      </div>
      <div className="bottom"></div>
      <ToDoListIcon />
    </WorkStyles>
  );
};

export { Work };
