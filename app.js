import React from "react";
import { render } from "react-dom";
import CounterStore from './CounterStore';
import CounterView from './CounterView';
import TodoApp from './Todo';
import QueryFilter from './src/QueryFilter';
import ResultsTable from './src/ResultsTable';
import Nav from './src/Nav';
import './sass/custom.scss'

const counterStore = new CounterStore();

render(
  <div>
    <div className="container border-bold">
       
    {/* <CounterView store={counterStore} /> */}


      {/* <Nav /> */}
      <QueryFilter />
      <ResultsTable />
      <TodoApp />
    </div>


  </div>,
  document.getElementById("root")
);
