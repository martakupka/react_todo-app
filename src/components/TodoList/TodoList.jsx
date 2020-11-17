import React from 'react';
import PropTypes from 'prop-types';
import { todoType } from '../../propTypes/todoType';
import { TodoItem } from '../TodoItem';

export const TodoList = ({
  items,
  removeTodo,
  updateTodo,
  allTogglerStatus,
}) => (
  <ul className="todo-list">
    {items.map(item => (
      <TodoItem
        todo={item}
        key={item.id}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        allTogglerStatus={allTogglerStatus}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(todoType).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  allTogglerStatus: PropTypes.bool.isRequired,
};
