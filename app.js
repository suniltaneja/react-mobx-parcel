import React from "react";
import { render } from "react-dom";
import CounterStore from './CounterStore';
import CounterView from './CounterView';

const counterStore = new CounterStore();

render(
  <div>
    <CounterView store={counterStore} />
  </div>,
  document.getElementById("root")
);
