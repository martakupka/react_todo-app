import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { todoType } from '../../propTypes/todoType';

export const TodoItem = ({
  todo,
  removeTodo,
  updateTodo,
  allTogglerStatus,
}) => {
  const [completedStatus, setCompletedStatus] = useState(todo.completed);

  useEffect(() => {
    setCompletedStatus(allTogglerStatus);
  }, [allTogglerStatus]);

  return (
    <li
      className={classNames('', { completed: completedStatus })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completedStatus}
          onChange={() => {
            setCompletedStatus(!todo.completed);
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
};
