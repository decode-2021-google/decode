import React from "react";
import styled from "styled-components";
import { RelaxNav } from "../components/relaxNav";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TopNav } from "../components/topNav";

const RelaxStyles = styled.div``;

const Relax = () => {
  return (
    <RelaxStyles>
      <TopNav />
      Break page
      <RelaxNav />
    </RelaxStyles>
  );
};

export { Relax };
