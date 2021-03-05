import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TimerStyles = styled.div`
  margin-top: 15vh;
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
      }
      .minutes {
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
      }
    }
    .large-circle {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.2rem solid white;
      border-radius: 100%;
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

const Timer = () => {
  return (
    <TimerStyles>
      <div className="container">
        <motion.div
          className="large-circle"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        >
          <div className="small-circle"></div>
        </motion.div>
        <div className="info">
          <div className="number">25</div>
          <div className="minutes">minutes</div>
        </div>
      </div>
    </TimerStyles>
  );
};

export { Timer };
