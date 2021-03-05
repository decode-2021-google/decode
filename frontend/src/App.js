import { DarkModeSwitch } from "./components/darkmodeSwitch";
import { ProfileSettings } from "./components/profileSettings";
import { ControlBar }  from "./components/controlBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="top">
        <DarkModeSwitch />
        <ProfileSettings />
      </div>
      <div className="timer"></div>
      <div className="controls">
        <ControlBar />
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
