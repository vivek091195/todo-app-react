import React, { useRef, useState } from 'react';
import { generateRandomNDigitNumber } from '../../utils/helper';

export default function AddTodo({ setTodos }) {
  const checkedRef = useRef();
  const [todo, setTodo] = useState('');

  const handleTodoCreation = ({ target }) => {
    setTodo(target.value);
  };

  const handleTodoAddition = () => {
    checkedRef.current.checked = false;
    setTodo('');
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: generateRandomNDigitNumber(6),
        label: todo,
      },
    ]);
  };

  return (
    <div className="bg-white rounded h-14 top-4 flex items-center">
      <input
        ref={checkedRef}
        type={'checkbox'}
        id={'submit-todo'}
        className="ml-4 mr-6 w-6 h-6 rounded-full"
        onChange={handleTodoAddition}
      />
      <input
        type={'text'}
        id={'add-todo'}
        placeholder={'Create a new todo…'}
        className="border-0 outline-none text-base text-[#9495A5]"
        value={todo}
        onChange={handleTodoCreation}
      />
    </div>
  );
}
