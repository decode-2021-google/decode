import firebase from "firebase";

var signedIn;
var userInfo = {};

export const authMethods = {
  init: () => {
    firebase.auth().onAuthStateChanged(function (user) {
      
      if (user) {
        signedIn = true;
        userInfo = firebase.auth().currentUser;
      }
    });
  },
  signIn: () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
    authMethods.init();
  },
  signOut: () => {
    signedIn = false;
    firebase.auth().signOut();
  },
  isSignedIn: () => {
    console.log(signedIn);
    return signedIn;
  },
  getUserInfo: () => {
    return userInfo;
  },
};
