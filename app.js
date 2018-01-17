import React from "react";
import { render } from "react-dom";
import AppState from './AppState';
import CounterStore from './CounterStore';
import TimerView from './TimerView';
import CounterView from './CounterView';

render(
  <div>
    <TimerView appState={new AppState()} />
    <CounterView store={new CounterStore()} />
  </div>,
  document.getElementById("root")
);
