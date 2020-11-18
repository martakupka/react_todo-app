import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { todoType } from '../../propTypes/todoType';
import { filtersType } from '../../propTypes/filtersType';

export const TodoItem = ({
  todo,
  removeTodo,
  updateTodo,
  allTogglerStatus,
  filters,
}) => {
  const [completedStatus, setCompletedStatus] = useState(todo.completed);

  const hideTodo = () => {
    if (
      (filters.active && todo.completed)
      || (filters.completed && !todo.completed)
    ) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    setCompletedStatus(todo.completed);
  }, [allTogglerStatus, todo.completed]);

  return (
    <li
      className={classNames('', {
        completed: completedStatus,
        hidden: hideTodo(),
      })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completedStatus}
          onChange={() => {
            setCompletedStatus(!completedStatus);
            updateTodo(todo.id);
          }}
        />
        <label>{todo.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

TodoItem.propTypes = {
  todo: todoType.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  allTogglerStatus: PropTypes.bool.isRequired,
  filters: filtersType.isRequired,
};
