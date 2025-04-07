import React from 'react';

export default function AddTodo() {
    return (
        <div className="bg-white rounded h-14 top-4 flex items-center">
            <input type={'checkbox'} id={'submit-todo'} className="ml-4 mr-6 w-6 h-6 rounded-full" />
            <input type={'text'} id={'add-todo'} placeholder={'Create a new todo…'} className="border-0 outline-none text-base text-[#9495A5]" />
        </div>
    )
}