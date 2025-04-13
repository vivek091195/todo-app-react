import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { THEMES, useThemeContext } from '../../context/ThemeContext';
import TodoActions from './TodoActions';
import { useTodoContext } from '../../context/TodoContext';

export default function Index() {
  const {
    todos,
    filter,
    setTodos,
    nonCompletedTodos,
    filteredTodos,
    handleClearTodos,
    handleFilterChange,
    handleTodoAddition,
    handleCompletedTodos,
  } = useTodoContext();
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
      <AddTodo handleTodoAddition={handleTodoAddition} />
      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        handleCompletedTodos={handleCompletedTodos}
      />
      <TodoActions
        todos={todos}
        filter={filter}
        nonCompletedTodos={nonCompletedTodos}
        handleFilterChange={handleFilterChange}
        handleClearTodos={handleClearTodos}
      />
      {todos.length > 1 && (
        <span className={'flex justify-center m-4 text-[14px] text-[#9495A5]'}>
          Drag and drop to reorder list
        </span>
      )}
    </div>
  );
}
