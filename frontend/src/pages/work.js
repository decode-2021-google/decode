import React from "react";
import styled from "styled-components";
import { ControlBar } from "../components/controlBar";
import { TestAuth } from "../components/testAuth";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";

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
      <TestAuth />
      <div className="timer">
        <Timer />
      </div>
      <div className="controls">
        <ControlBar />
      </div>
      <div className="bottom"></div>
    </WorkStyles>
  );
};

export { Work };
