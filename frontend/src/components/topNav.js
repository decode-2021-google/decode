import React from "react";
import styled from "styled-components";
import { DarkModeSwitch } from "./darkmodeSwitch";
import { ProfileSettings } from "./profileSettings";

const TopNavStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopNav = (props) => {
  return (
    <TopNavStyles>
      <DarkModeSwitch />
      <ProfileSettings user={props.user} isSignedIn={props.isSignedIn}/>
    </TopNavStyles>
  );
};

export { TopNav };
