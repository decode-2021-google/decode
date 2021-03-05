import firebase from "firebase";

var isSignedIn = false;
var userInfo = {};

export const authMethods = {
  init: () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        isSignedIn = true;
        userInfo = firebase.auth().currentUser;
      } else {
        isSignedIn = false;
      }
    });
  },
  signIn: () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
    authMethods.init();
  },
  signOut: () => {
    firebase.auth().signOut();
  },
  isSignedIn: () => {
    return isSignedIn;
  },
  getUserInfo: () => {
    return userInfo;
  },
};
