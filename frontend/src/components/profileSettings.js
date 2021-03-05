import React from "react";
import styled from "styled-components";
import {authMethods} from "../AuthMethods";

const ProfileSettingsStyles = styled.div`
  display: flex;
  .profile {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
  }
  .settings {
    width: 2rem;
    height: 2rem;
  }
  .greeting {
    color: white;
    padding-top: 4px;
    padding-right: 32px;
    font-weight: 500;
  }
`;

const ProfileSettings = (props) => {
  return (
    <ProfileSettingsStyles>
    <div class="greeting">{props.isSignedIn ? "Welcome back,  " + props.user.displayName + "!" : "You are not logged in"}</div>
      { props.isSignedIn && <div className="profile">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-circle"
          class="svg-inline--fa fa-user-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          onClick={() => {
            authMethods.signOut();
          }}
        >
          <path
            fill="white"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
          ></path>
        </svg>
      </div>}
      <div className="settings">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="cog"
          class="svg-inline--fa fa-cog fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
          ></path>
        </svg>
      </div>
    </ProfileSettingsStyles>
  );
};

export { ProfileSettings };
