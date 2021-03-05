import React from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { PrimaryButton } from "../components/primaryButton";
import { ToDoListIcon } from "../components/toDoListIcon";

const WelcomeStyles = styled.div`
  .button-container {
    text-align: center;
    padding: 2rem 0;
  }
  .sign-in-container {
    text-align: center;
    color: white;
    a {
      font-weight: 700;
    }
  }
`;

const Welcome = () => {
  return (
    <WelcomeStyles>
      <TopNav />
      <Timer />
      <div className="button-container">
        <PrimaryButton>Start Timer</PrimaryButton>
      </div>
      <div className="sign-in-container">
        Already have an account? <a href="">Sign in</a>
      </div>
      <ToDoListIcon />
    </WelcomeStyles>
  );
};

export { Welcome };
