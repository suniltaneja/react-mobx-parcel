import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoStore from './TodoStore';

const observableTodoStore = new TodoStore();

ReactDOM.render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('reactjs-app')
);
