import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoApp = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: +new Date(),
    title: '',
    completed: false,
  });

  const handleChange = (event) => {
    setTodo({
      ...todo,
      title: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (!todo.title) {
      return;
    }

    addTodo(todo);

    setTodo({
      id: +new Date(),
      title: '',
      completed: false,
    });
  };

  return (
    <form onSubmit={event => event.preventDefault()}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo.title}
        onChange={event => handleChange(event)}
        onKeyDown={event => handleSubmit(event)}
      />
    </form>
  );
};

TodoApp.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
