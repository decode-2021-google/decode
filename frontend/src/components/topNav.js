import React, { useState } from "react";
import styled from "styled-components";
import { DarkModeSwitch } from "./darkmodeSwitch";
import { ProfileSettings } from "./profileSettings";

const TopNavStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopNav = () => {
  return (
    <TopNavStyles>
      <DarkModeSwitch />
      <ProfileSettings />
    </TopNavStyles>
  );
};

export { TopNav };
