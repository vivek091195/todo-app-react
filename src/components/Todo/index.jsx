import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Icon } from '../../assets/icon.svg';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Index() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1/3">
      <div className="flex justify-between mb-10">
        <Logo />
        <Icon className="cursor-pointer" />
      </div>
      <AddTodo setTodos={setTodos} />
      <TodoList todoItems={todos} setTodos={setTodos} />
    </div>
  );
}
