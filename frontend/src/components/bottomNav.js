import React from "react";
import styled from "styled-components";
import { DarkModeSwitch } from "./darkmodeSwitch";
import { RelaxNav } from "./primaryButton";
import { ToDoListIcon } from "./toDoListIcon";

BottomNav = () => {
    switch(window.location.pathname){
      case '/relax':
        return RelaxNav;
      default:
        return ToDoListIcon;
    }
}
export { BottomNav };
