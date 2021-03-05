import firebase from 'firebase'

export const authMethods = {
  signIn: () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
    },
    signOut: () => {
      firebase.auth().signOut();
      },
  }