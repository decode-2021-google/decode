import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from{
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const TimerStyles = styled.div`
  margin-top: 5vh;
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
    .info {
      color: white;
      font-family: "Inter", sans-serif;
      .number {
        font-size: 6rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: -1rem;
        color: white;
        width: 10rem;
        ::placeholder {
          color: white;
        }
      }
      .minutes {
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
        pointer-events: none;
      }
    }
    .large-circle {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.2rem solid white;
      border-radius: 100%;
      animation: ${spin} 0s infinite;
      animation-play-state: paused;
      .small-circle {
        width: 2rem;
        height: 2rem;
        background-color: white;
        border-radius: 100%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

const Timer = ({ totalTime, setTotalTime, playState }) => {
  const circleRef = useRef(null);
  useEffect(() => {
    circleRef.current.style.animationDuration = `${totalTime * 60}s`;
    if (playState) {
      console.log("run");
      circleRef.current.style.animationPlayState = true;
    }
  }, [playState, totalTime]);

  return (
    <TimerStyles>
      <div className="container">
        <div className="large-circle" ref={circleRef}>
          <div className="small-circle"></div>
        </div>
        <div className="info">
          <input
            className="number"
            placeholder="00"
            onBlur={(event) => {
              setTotalTime(event.target.value);
            }}
          />
          <div className="minutes">minutes</div>
        </div>
      </div>
    </TimerStyles>
  );
};

export { Timer };
