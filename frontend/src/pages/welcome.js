import React from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";

const WelcomeStyles = styled.div``;

const Welcome = () => {
  return (
    <WelcomeStyles>
      <TopNav />
      <Timer />
    </WelcomeStyles>
  );
};

export { Welcome };
