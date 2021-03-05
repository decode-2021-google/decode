import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const DarkModeSwitchStyles = styled.div`
  width: 2.5rem;
  height: 1.4rem;
  border: 0.2rem solid white;
  border-radius: 20rem;
  position: relative;
  cursor: pointer;
  .dot {
    width: 0.8rem;
    height: 0.8rem;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
    transition: 0.3s all ease 0.1s;
  }
`;

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentLocation = useLocation();
  useEffect(() => {
    const bodyEl = document.querySelector("body");
    if (isDarkMode) {
      bodyEl.style.background = "#22303C";
    } else {
      switch (currentLocation.pathname) {
        case "/break":
          bodyEl.style.background =
            "linear-gradient(335.92deg, #1A71B9 5.49%, #73D5F3 104.99%)";
          break;
        case "/work":
          bodyEl.style.background =
            "linear-gradient(335.92deg, #F97902 5.49%, #FFB200 73.38%, #FFB800 104.99%)";
          break;
        case "/":
          bodyEl.style.background =
            "linear-gradient(335.92deg, #F97902 5.49%, #FFB200 73.38%, #FFB800 104.99%)";
          break;
        case "/categories":
          bodyEl.style.background =
            "linear-gradient(335.92deg, #4D1AB9 5.49%, #D273F3 104.99%)";
          break;
        default:
          return;
      }
    }
  }, [isDarkMode]);
  return (
    <DarkModeSwitchStyles
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{ backgroundColor: isDarkMode ? "white" : "transparent" }}
    >
      <div
        className="dot"
        style={{
          left: isDarkMode ? "1.2rem" : "0.2rem",
          backgroundColor: isDarkMode ? "#22303C" : "white",
        }}
      />
    </DarkModeSwitchStyles>
  );
};

export { DarkModeSwitch };
