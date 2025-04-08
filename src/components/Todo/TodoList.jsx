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
            className={`bg-white h-14 flex items-center p-1 ${
              index === 0 && 'rounded-t'
            } 
          ${index === todoItems.length - 1 && 'rounded-b'}`}
          >
            <input
              type={'checkbox'}
              id={'submit-todo'}
              className="ml-4 mr-6 w-6 h-6 rounded-full"
              onChange={(e) => handleMarkTodo(e, id)}
            />
            <span
              className={`text-base text-[#494C6B] ${marked && 'text-[#D1D2DA] line-through'}`}
            >
              {label}
            </span>
          </div>
          {index !== todoItems.length - 1 && (
            <div className={'w-full h-[1px] bg-[#E3E4F1]'}></div>
          )}
        </>
      ))}
    </div>
  );
}
