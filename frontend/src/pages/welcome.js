import React, { useState } from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { BottomNav } from "../components/bottomNav";
import { Timer } from "../components/timer";
import { PrimaryButton } from "../components/primaryButton";
import { ToDoListIcon } from "../components/toDoListIcon";
import { authMethods } from "../AuthMethods";
import { useAnimation } from "framer-motion"

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

const Welcome = (props) => {
  const [totalTime, setTotalTime] = useState(0);
  const [playState, setPlayState] = useState(false);
  const controls = useAnimation();

  return (
    <WelcomeStyles>
      <TopNav />
      <Timer
        totalTime={totalTime}
        setTotalTime={setTotalTime}
        playState={playState}
        controls={controls}
      />
      <div className="button-container" onClick={() => {
          controls.start({
            rotate: 360,
            transition: { duration: totalTime * 60, ease: "linear" }
          });
        }}>
        <PrimaryButton>Start Timer</PrimaryButton>
      </div>
      <div className="sign-in-container">
        Already have an account?{" "}
        
        <span
          onClick={() => {
            const googleAuthProvider = new props.firebase.auth.GoogleAuthProvider();
            props.firebase.auth().signInWithPopup(googleAuthProvider);
            console.log(props.firebase.auth().user);
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
