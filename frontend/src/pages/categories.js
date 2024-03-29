import React from "react";
import styled from "styled-components";
import { ToDoListIcon } from "../components/toDoListIcon";
import { TopNav } from "../components/topNav";
import { Prompt } from "../components/prompt";
import { PrimaryButton } from "../components/primaryButton";
import { PageNav } from "../components/pageNav";

const CategoriesStyles = styled.div`
  .categories {
    margin: 0 auto -1.2rem auto;
    width: 42rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    button {
      width: 20rem;
      height: 4.5rem;
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const Categories = (props) => {
  let categories = [];
  fetch(`/api/get_categories`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Categories: " + data.results);
    })
    .catch((e) => console.log(e));
  return (
    <CategoriesStyles>
      <TopNav user={props.user} isSignedIn={props.isSignedIn} />
      <Prompt message="What categories are you most interested in?" />
      <div className="categories">
        <PrimaryButton>Cute Animals and Pets</PrimaryButton>
        <PrimaryButton>Twitch Streams</PrimaryButton>
        <PrimaryButton>Cooking & Food</PrimaryButton>
        <PrimaryButton>Yoga</PrimaryButton>
        <PrimaryButton>I don't know what</PrimaryButton>
        <PrimaryButton>I still don't know what</PrimaryButton>
        <PrimaryButton>Youtube Videos</PrimaryButton>
        <PrimaryButton>ASMR Videos</PrimaryButton>
      </div>
      <PageNav left="/break" right="/relax" number={3} />
      <ToDoListIcon />
    </CategoriesStyles>
  );
};

export { Categories };
