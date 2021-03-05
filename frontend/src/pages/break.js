import React from "react";
import styled from "styled-components";
import { TopNav } from "../components/topNav";
import { ToDoListIcon } from "../components/toDoListIcon";

const BreakStyles = styled.div``;

const Break = () => {
  return (
    <BreakStyles>
      <TopNav />
      Break page
      <ToDoListIcon />
    </BreakStyles>
  );
};

export { Break };
