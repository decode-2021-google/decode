import React, { useState } from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { PrimaryButton } from "../components/primaryButton";
import { ToDoListIcon } from "../components/toDoListIcon";
import { authMethods } from "../AuthMethods";

const WelcomeStyles = styled.div`
  .button-container {
    padding: 2rem 0;
    text-align: center;
  }
  .sign-in-container {
    text-align: center;
    color: white;
    span {
      cursor: pointer;
      font-weight: 700;
    }
  }
`;

const Welcome = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [playState, setPlayState] = useState(false);

  return (
    <WelcomeStyles>
      <TopNav />
      <Timer
        totalTime={totalTime}
        setTotalTime={setTotalTime}
        playState={playState}
      />
      <div className="button-container">
        <PrimaryButton>Start Timer</PrimaryButton>
      </div>
      <div className="sign-in-container">
        Already have an account?{" "}
        <span
          onClick={() => {
            authMethods.signIn();
          }}
        >
          Sign In with Google
        </span>
      </div>
      <ToDoListIcon />
    </WelcomeStyles>
  );
};

export { Welcome };
