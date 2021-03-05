import React from "react";
import styled from "styled-components";

const DarkModeSwitchStyles = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
`;

const DarkModeSwitch = () => {
  return <DarkModeSwitchStyles>darkmode</DarkModeSwitchStyles>;
};

export { DarkModeSwitch };
