const TodoActions = ({ todos }) => {
  return (
    todos.length > 0 && (
      <div className="bg-white rounded-b h-14 flex items-center justify-between p-4 dark:bg-[#25273D] shadow-lg">
        <span className="action-btn font-normal hover:text-[#9495A5]">
          {todos.length > 1 ? `${todos.length} Items` : `${todos.length} Item`}{' '}
          left
        </span>
        <div>
          <button className="action-btn">All</button>
          <button className="action-btn">Active</button>
          <button className="action-btn">Completed</button>
        </div>
        <button className="action-btn font-normal">Clear Completed</button>
      </div>
    )
  );
};

export default TodoActions;
