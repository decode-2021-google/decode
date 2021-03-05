import React from "react";
import styled from "styled-components";

const PromprStyles = styled.div`
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  padding: 5vh 0;
`;

const Prompt = (props) => {
  return <PromprStyles>{props.message}</PromprStyles>;
};

export { Prompt };
