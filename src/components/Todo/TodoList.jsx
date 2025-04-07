import React from 'react';

export default function TodoList() {
    return (
        <div className="mt-8 flex flex-col">
            <div className="bg-white h-14 flex items-center p-1 rounded-tl rounded-tr rounded-bl-0 rounded-br-0">
                <input type={'checkbox'} id={'submit-todo'} className="ml-4 mr-6 w-6 h-6 rounded-full"/>
                <span className="text-base text-[#494C6B]">This is some random TODO</span>
            </div>
            <div className="bg-white h-14 flex items-center p-1">
                <input type={'checkbox'} id={'submit-todo'} className="ml-4 mr-6 w-6 h-6 rounded-full"/>
                <span className="text-base text-[#494C6B]">This is some random TODO</span>
            </div>
            <div className="bg-white h-14 flex items-center p-1 rounded-tl-0 rounded-tr-0 rounded-bl rounded-br">
                <input type={'checkbox'} id={'submit-todo'} className="ml-4 mr-6 w-6 h-6 rounded-full"/>
                <span className="text-base text-[#494C6B]">This is some random TODO</span>
            </div>
        </div>
    )
}