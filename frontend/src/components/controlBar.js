import React from "react";
import { Icon } from "@iconify/react";
import bxsXCircle from "@iconify/icons-bx/bxs-x-circle";
import pauseCircleFilled from "@iconify/icons-ant-design/pause-circle-filled";
import roundReplayCircleFilled from "@iconify/icons-ic/round-replay-circle-filled";
import styled from "styled-components";

const ControlBarStyles = styled.div`
  .controlButton {
    margin: 2rem 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .primary-control {
    color: #ffffff;
    width: 100px;
    height: 100px;
    filter: drop-shadow(0px 24px 32px rgba(0, 0, 0, 0.04)),
      drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.04)),
      drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)),
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  }
  .secondary-control {
    margin: 0px 30px 0px 30px;
    color: #ffe9ad;
    width: 60px;
    height: 60px;
  }
`;
const ControlBar = () => {
  return (
    <ControlBarStyles>
      <div className="controlButton">
        <Icon icon={bxsXCircle} className="secondary-control" />
        <Icon icon={pauseCircleFilled} className="primary-control" />
        <Icon icon={roundReplayCircleFilled} className="secondary-control" />
      </div>
    </ControlBarStyles>
  );
};

export { ControlBar };
