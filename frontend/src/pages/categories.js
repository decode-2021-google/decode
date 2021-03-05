import React from "react";
import styled from "styled-components";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TopNav } from "../components/topNav";

const CategoriesStyles = styled.div``;

const Categories = () => {
  return (
    <CategoriesStyles>
      <TopNav />
      Categories
      <ToDoListIcon />
    </CategoriesStyles>
  );
};

export { Categories };
