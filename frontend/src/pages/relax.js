import React from "react";
import styled from "styled-components";
import { RelaxNav } from "../components/relaxNav";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TopNav } from "../components/topNav";

const RelaxStyles = styled.div`
  .container {
    text-align: center;
    iframe {
      margin: 2rem auto;
      width: 75vw;
      height: 70vh;
      border: none;
    }
  }
`;

const Relax = (props) => {
  return (
    <RelaxStyles>
      <TopNav user={props.user} isSignedIn={props.isSignedIn} />
      <div className="container">
        <iframe
          className="content"
          title="video"
          src="https://www.youtube.com/embed/xvFZjo5PgG0?controls=0"
          allowfullscreen
        ></iframe>
      </div>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xvFZjo5PgG0?controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <RelaxNav />
    </RelaxStyles>
  );
};

export { Relax };
