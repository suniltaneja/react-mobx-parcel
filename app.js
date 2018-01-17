import React from "react";
import { render } from "react-dom";
import AppState from './AppState';
import CounterStore from './CounterStore';
import TimerView from './TimerView';
import CounterView from './CounterView';

const counterStore = new CounterStore();

render(
  <div>
    <TimerView appState={new AppState()} />
    <CounterView store={counterStore} />
  </div>,
  document.getElementById("root")
);
