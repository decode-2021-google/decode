import { DarkModeSwitch } from "./components/darkmodeSwitch";
import { ProfileSettings } from "./components/profileSettings";
import { Timer } from "./components/timer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="top">
        <DarkModeSwitch />
        <ProfileSettings />
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
