import { useEffect, useRef, useState } from 'react';
import constate from 'constate';
import { generateRandomNDigitNumber } from '../utils/helper';

export const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active',
};

const useTodo = () => {
  const nonCompletedTodos = useRef([]);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filteredTodos = () => {
      switch (filter) {
        case FILTERS.COMPLETED:
          return todos.filter((todo) => todo.marked);
        case FILTERS.ACTIVE:
          return todos.filter((todo) => !todo.marked);
        default:
          return todos;
      }
    };

    setFilteredTodos(filteredTodos());
  }, [filter, todos]);

  useEffect(() => {
    nonCompletedTodos.current = todos.filter((todo) => !todo.marked);
  }, [todos]);

  const handleTodoAddition = (todo) => {
    if (!todo) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: generateRandomNDigitNumber(6),
        label: todo,
      },
    ]);
  };

  const handleCompletedTodos = (_, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, marked: !item.marked } : item
      )
    );
  };

  const handleFilterChange = ({ target }) => {
    setFilter(target.id);
  };

  const handleClearTodos = () => {
    const nonCompletedTodos = todos.filter((todo) => !todo.marked);
    setTodos(nonCompletedTodos);
  };

  return {
    todos,
    filter,
    setTodos,
    nonCompletedTodos,
    filteredTodos,
    handleClearTodos,
    handleFilterChange,
    handleTodoAddition,
    handleCompletedTodos,
  };
};

const [TodoProvider, useTodoContext] = constate(useTodo);

export { TodoProvider, useTodoContext };
