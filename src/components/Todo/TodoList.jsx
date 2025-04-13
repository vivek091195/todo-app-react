import React, { useState } from 'react';

export default function TodoList({
  todos = [],
  handleCompletedTodos,
  setTodos,
}) {
  const [dragStartIndex, setDragStartIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (id) => {
    setDragStartIndex(id);
  };

  const handleDragEnd = () => {
    setDragStartIndex(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    setDragOverIndex(id);
  };

  const handleDrop = () => {
    if (
      dragOverIndex !== null &&
      dragStartIndex !== null &&
      dragStartIndex !== dragOverIndex
    ) {
      const newTodos = [...todos];
      const index = newTodos.findIndex((todo) => todo.id === dragStartIndex);
      const [movedTodo] = newTodos.splice(index, 1);
      newTodos.splice(dragOverIndex, 0, movedTodo);
      setTodos(newTodos);
    }

    setDragStartIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="mt-8 flex flex-col shadow-lg">
      {todos.map(({ id, label, marked }, index) => (
        <>
          <div
            key={id}
            className={`bg-white h-14 flex items-center p-1 dark:bg-[#25273D] ${
              index === 0 && 'rounded-t'
            }`}
            draggable={true}
            onDrop={handleDrop}
            onDragStart={(e) => handleDragStart(id)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, id)}
          >
            <input
              type={'checkbox'}
              id={'submit-todo'}
              checked={marked}
              className="ml-4 mr-6 w-6 h-6 rounded-full"
              onChange={(e) => handleCompletedTodos(e, id)}
            />
            <span
              className={`text-base text-[#494C6B] dark:text-[#C8CBE7] ${marked && 'text-[#D1D2DA] line-through'}`}
            >
              {label}
            </span>
          </div>
          <div
            className={'w-full h-[1px] bg-[#E3E4F1] dark:bg-[#979797]'}
          ></div>
        </>
      ))}
    </div>
  );
}
