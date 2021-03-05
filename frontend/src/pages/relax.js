import React from "react";
import styled from "styled-components";
import { RelaxNav } from "../components/relaxNav";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TopNav } from "../components/topNav";

const RelaxStyles = styled.div`
  .content {
    margin: 2rem auto;
    width: 80vw;
    height: 70vh;
    border: 1px solid red;
  }
`;

const Relax = (props) => {
  return (
    <RelaxStyles>
      <TopNav user={props.user} isSignedIn={props.isSignedIn}/>
      <div className="content"></div>
      <RelaxNav />
    </RelaxStyles>
  );
};

export { Relax };
