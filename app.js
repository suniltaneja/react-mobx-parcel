import React from "react";
import { render } from "react-dom";
import CounterStore from './CounterStore';
import CounterView from './CounterView';
import TodoApp from './Todo';

const counterStore = new CounterStore();

render(
  <div>
    <CounterView store={counterStore} />
    <TodoApp />
  </div>,
  document.getElementById("root")
);
