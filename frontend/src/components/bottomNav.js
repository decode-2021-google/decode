import { DarkModeSwitch } from "./darkmodeSwitch";
import { RelaxNav } from "./relaxNav";
import { ToDoListIcon } from "./toDoListIcon";

const BottomNav = () => {
    switch(window.location.pathname){
      case '/relax':
        return RelaxNav;
      default:
        return ToDoListIcon;
    }
};

export { BottomNav };
