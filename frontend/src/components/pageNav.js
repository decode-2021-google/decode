import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNavStyles = styled.div`
  margin: 10vh 0;
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12rem;
  }
  .left,
  .right {
    width: 1.2rem;
    height: 1.2rem;
    svg {
      width: 100%;
      height: 100%;
      color: white;
    }
  }
  .dots {
    display: flex;
    justify-content: space-between;
    width: 4rem;
    &-dot {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      border: 0.15rem solid white;
      &.filled {
        background-color: white;
      }
    }
  }
`;

const PageNav = ({ left, right, number }) => {
  const filled = [];
  const empty = [];
  for (let i = 0; i < number; i++) {
    filled.push(<div className="dots-dot filled" key={i}></div>);
  }
  for (let x = 0; x < 3 - number; x++) {
    empty.push(<div className="dots-dot" key={x}></div>);
  }
  return (
    <PageNavStyles>
      <div className="container">
        <Link className="left" style={{ opacity: left ? "1" : "0" }} to={left}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            class="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            ></path>
          </svg>
        </Link>
        <div className="dots">
          {filled.map((item) => {
            return item;
          })}
          {empty.map((item) => {
            return item;
          })}
        </div>
        <Link className="right" to={right}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            class="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            ></path>
          </svg>
        </Link>
      </div>
    </PageNavStyles>
  );
};

export { PageNav };
