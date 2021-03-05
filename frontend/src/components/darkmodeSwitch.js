import React from "react";
import styled from "styled-components";

const DarkModeSwitchStyles = styled.div`
  width: 2.5rem;
  height: 1.4rem;
  border: 0.2rem solid white;
  border-radius: 20rem;
  position: relative;
  cursor: pointer;
  .dot {
    width: 0.8rem;
    height: 0.8rem;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
  }
`;

const DarkModeSwitch = () => {
  return (
    <DarkModeSwitchStyles>
      <div className="dot"></div>
    </DarkModeSwitchStyles>
  );
};

export { DarkModeSwitch };
