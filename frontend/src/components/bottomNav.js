import React from "react";
import styled from "styled-components";
import { DarkModeSwitch } from "./darkmodeSwitch";
import { RelaxNav } from "./primaryButton";

const BottomNavStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomNav = () => {
  return (
    <BottomNavStyles>
      <DarkModeSwitch />
      <ProfileSettings />
    </BottomNavStyles>
  );
};

export { BottomNav };
