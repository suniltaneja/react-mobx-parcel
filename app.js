import React from "react";
import { render } from "react-dom";
import CounterStore from './CounterStore';
import CounterView from './CounterView';
import TodoApp from './Todo';
import './sass/custom.scss'

const counterStore = new CounterStore();

render(
  <div>
    <CounterView store={counterStore} />
    <div className="border-bold">
      <TodoApp />
    </div>


  </div>,
  document.getElementById("root")
);
