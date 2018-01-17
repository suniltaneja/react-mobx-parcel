import React from "react";
import { render } from "react-dom";
import AppState from './AppState';
import TimerView from './TimerView';

render(
  <div>
    <TimerView appState={new AppState()} />
  </div>,
  document.getElementById("root")
);
