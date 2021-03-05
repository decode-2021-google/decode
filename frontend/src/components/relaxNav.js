import React from "react";
import { Icon } from "@iconify/react";
import thumbsUp from "@iconify/icons-fa/thumbs-up";
import thumbsDown from "@iconify/icons-fa/thumbs-down";
import timer16Filled from "@iconify/icons-fluent/timer-16-filled";
import { PrimaryButton } from "../components/primaryButton";
import styled from "styled-components";

const RelaxNavStyles = styled.div`
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .approval {
      width: 5rem;
      display: flex;
      justify-content: space-between;
      .footer-icon {
        :nth-child(2) {
          margin-left: 1rem;
        }
      }
    }
  }

  .controls {
    width: 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      padding: 0.5rem 1rem;
    }
  }
  .footer-icon {
    color: white;
    height: 2rem;
    width: 2rem;
  }
`;

const RelaxNav = () => {
  return (
    <RelaxNavStyles>
      <div className="footer">
        <div className="approval">
          <Icon icon={thumbsUp} class="footer-icon" />
          <Icon icon={thumbsDown} class="footer-icon" />
        </div>
        <div className="controls">
          <PrimaryButton>Skip Content</PrimaryButton>
          <Icon icon={timer16Filled} class="footer-icon" />
        </div>
      </div>
    </RelaxNavStyles>
  );
};

export { RelaxNav };
