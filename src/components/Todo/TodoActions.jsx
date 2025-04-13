import { FILTERS } from '../../context/TodoContext';

const TodoActions = ({
  todos,
  filter,
  nonCompletedTodos,
  handleFilterChange,
  handleClearTodos,
}) => {
  return (
    todos.length > 0 && (
      <div className="bg-white rounded-b h-14 flex items-center justify-between p-4 dark:bg-[#25273D] shadow-lg whitespace-nowrap">
        <span className="action-btn font-normal hover:text-[#9495A5]">
          {nonCompletedTodos.current.length > 1
            ? `${nonCompletedTodos.current.length} Items`
            : `${nonCompletedTodos.current.length} Item`}{' '}
          left
        </span>
        <div>
          <button
            id={FILTERS.ALL}
            className={`${filter === FILTERS.ALL ? 'action-btn action-btn-active' : 'action-btn'}`}
            onClick={handleFilterChange}
          >
            All
          </button>
          <button
            id={FILTERS.ACTIVE}
            className={`${filter === FILTERS.ACTIVE ? 'action-btn action-btn-active' : 'action-btn'}`}
            onClick={handleFilterChange}
          >
            Active
          </button>
          <button
            id={FILTERS.COMPLETED}
            className={`${filter === FILTERS.COMPLETED ? 'action-btn action-btn-active' : 'action-btn'}`}
            onClick={handleFilterChange}
          >
            Completed
          </button>
        </div>
        <button className="action-btn font-normal" onClick={handleClearTodos}>
          Clear Completed
        </button>
      </div>
    )
  );
};

export default TodoActions;
