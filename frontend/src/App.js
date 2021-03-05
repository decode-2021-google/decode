import { DarkModeSwitch } from "./components/darkmodeSwitch";
import { ProfileSettings } from "./components/profileSettings";
<<<<<<< HEAD
import { Timer } from "./components/timer";
=======
import { TestAuth } from "./components/testAuth";
>>>>>>> ffbcd208f444c0cbf0cf45af4c85f59cb985cb32
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="top">
        <DarkModeSwitch />
        <ProfileSettings />
        <TestAuth />
      </div>
      <div className="timer">
        <Timer />
      </div>
      <div className="controls"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
