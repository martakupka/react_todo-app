import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { todoType } from '../../propTypes/todoType';

export const TodoItem = ({ todo, removeTodo }) => {
  const [completedStatus, setCompletedStatus] = useState(todo.completed);

  return (
    <li
      className={classNames('', { completed: completedStatus })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={() => {
            setCompletedStatus(!completedStatus);
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
};
