import React from "react";
import styled from "styled-components";

const PrimaryButtonStyles = styled.button`
  background: rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;

const PrimaryButton = (props) => {
  return <PrimaryButtonStyles>{props.text}</PrimaryButtonStyles>;
};

export { PrimaryButton };
