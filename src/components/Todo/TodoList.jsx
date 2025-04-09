import React from 'react';

export default function TodoList({ todoItems = [], setTodos }) {
  const handleMarkTodo = (_, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, marked: !item.marked } : item
      )
    );
  };

  return (
    <div className="mt-8 flex flex-col shadow-lg">
      {todoItems.map(({ id, label, marked }, index) => (
        <>
          <div
            key={id}
            className={`bg-white h-14 flex items-center p-1 dark:bg-[#25273D] ${
              index === 0 && 'rounded-t'
            }`}
          >
            <input
              type={'checkbox'}
              id={'submit-todo'}
              className="ml-4 mr-6 w-6 h-6 rounded-full"
              onChange={(e) => handleMarkTodo(e, id)}
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
