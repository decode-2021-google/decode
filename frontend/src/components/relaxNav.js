import React from "react";
import { Icon } from "@iconify/react";
import thumbsUp from '@iconify/icons-fa/thumbs-up';
import thumbsDown from '@iconify/icons-fa/thumbs-down';
import timer16Filled from '@iconify/icons-fluent/timer-16-filled';
import { PrimaryButton } from "../components/primaryButton";
import styled from "styled-components";


const RelaxNavStyles = styled.div` 
  .footer {
    display: flex;

    .approval{
      align: left;
      padding: 1rem 2rem;
    }
  
    .controls {
      align: right;
      padding: 1rem 2rem;
    }
  }

  .footer-icon {
    color: #ffffff;
    padding: 0rem 1rem 0rem 1rem;
    width: 60px;
    height: 60px;
  }
`;

const RelaxNav = () => {
    return (
      <RelaxNavStyles>
          <div className="footer">
            <div className="approval">
              <Icon icon={thumbsUp} class="footer-icon"/>
              <Icon icon={thumbsDown} class="footer-icon"/>
            </div>
            <div className="controls">
              <PrimaryButton text="Start Timer" />
              <Icon icon={timer16Filled} class="footer-icon" />
            </div>
          </div>
      </RelaxNavStyles>
    );
  };
  
export { RelaxNav };

