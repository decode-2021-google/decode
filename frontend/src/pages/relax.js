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

const Relax = () => {
  return (
    <RelaxStyles>
      <TopNav />
      <div className="content"></div>
      <RelaxNav />
    </RelaxStyles>
  );
};

export { Relax };
