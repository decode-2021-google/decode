import { Switch, Route } from "react-router-dom";
import "./App.scss";

//auth
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed, FirebaseAuthConsumer } from "@react-firebase/auth";
import { firebaseConfig } from "./firebase-config";
import firebaseInstance from "./FirebaseProvider";

//pages
import { Welcome } from "./pages/welcome";
import { Break } from "./pages/break";
import { Relax } from "./pages/relax";
import { Work } from "./pages/work";
import { Categories } from "./pages/categories";
import { NotFound } from "./pages/notFound";
import { authMethods } from "./AuthMethods";

function App() {
  return (
    <div className="App">
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      {/* {authMethods.init(firebaseInstance)} */}
        <Switch>
          <Route path="/" exact>
            <IfFirebaseUnAuthed><Welcome/></IfFirebaseUnAuthed>
            <IfFirebaseAuthed>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => { return (<Work user={user} isSignedIn={isSignedIn}/>);}}</FirebaseAuthConsumer>
          </IfFirebaseAuthed>

          </Route>
          <Route path="/work" exact>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => { return (<Work user={user} isSignedIn={isSignedIn}/>);}}</FirebaseAuthConsumer>
          </Route>
          <Route path="/break" exact>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => { return (<Break user={user} isSignedIn={isSignedIn}/>);}}</FirebaseAuthConsumer>
          </Route>
          <Route path="/categories" exact>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => { return (<Categories user={user} isSignedIn={isSignedIn}/>);}}</FirebaseAuthConsumer>
          </Route>
          <Route path="/relax" exact>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => { return (<Relax user={user} isSignedIn={isSignedIn}/>);}}</FirebaseAuthConsumer>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;
