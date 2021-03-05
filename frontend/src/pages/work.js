import React from "react";
import styled from "styled-components";
import { ControlBar } from "../components/controlBar";
import { TopNav } from "../components/topNav";
import { Timer } from "../components/timer";
import { ToDoListIcon } from "../components/toDoListIcon";
import { PageNav } from "../components/pageNav";
import { Prompt } from "../components/prompt";
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed, FirebaseAuthConsumer } from "@react-firebase/auth";
import { useAnimation } from "framer-motion"

const WorkStyles = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
  }
  .timer {
    margin-top: -1rem;
  }
  .controls {
    margin-bottom: -2.5rem;
  }
`;

const Work = (props) => {
  const controls = useAnimation();

  return (
    <WorkStyles>
        
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user.uid,
          }),
        };
        fetch("/api/add_user", requestOptions)
          .then((response) => console.log(response.json()));
      }}
    </FirebaseAuthConsumer>
      <TopNav user={props.user} isSignedIn={props.isSignedIn}/>
      <Prompt message="How long do you want to work?" />
      <div className="timer">
        <Timer controls={controls} />
      </div>
      <div className="controls">
        <ControlBar />
      </div>
      <PageNav number={1} left="" right="/break" />
      <ToDoListIcon />
    </WorkStyles>
  );
};

export { Work };
