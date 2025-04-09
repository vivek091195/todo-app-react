import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { THEMES, useThemeContext } from '../../context/ThemeContext';
import TodoActions from './TodoActions';

export default function Index() {
  const [todos, setTodos] = useState([]);
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1/3">
      <div className="flex justify-between mb-10">
        <Logo />
        {theme === THEMES.LIGHT ? (
          <SunIcon className="cursor-pointer" onClick={toggleTheme} />
        ) : (
          <MoonIcon className="cursor-pointer" onClick={toggleTheme} />
        )}
      </div>
      <AddTodo setTodos={setTodos} />
      <TodoList todoItems={todos} setTodos={setTodos} />
      <TodoActions todos={todos} />
    </div>
  );
}
