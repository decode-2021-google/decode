import React from "react";
import styled from "styled-components";
import { DarkModeSwitch } from "../components/darkmodeSwitch";
import { ProfileSettings } from "../components/profileSettings";
import { ControlBar } from "../components/controlBar";
import { TestAuth } from "../components/testAuth";
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
      <div className="top">
        <DarkModeSwitch />
        <ProfileSettings />
        <TestAuth />
      </div>
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
