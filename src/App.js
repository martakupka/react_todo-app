import React, { useState } from 'react';
import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      newTodo,
    ]);
  };

  const removeTodo = (todoId) => {
    setTodos(
      todos.filter(todo => todo.id !== todoId),
    );
  };

  const uncompletedTodos = todos.filter(todo => !todo.completed);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <TodoApp addTodo={addTodo} />

        {/* <form>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </form> */}
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        {todos.length > 0
          ? (
            <TodoList
              items={todos}
              removeTodo={removeTodo}
            />
          )
          : null
        }

        {/* <ul className="todo-list">
          <li>
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>asdfghj</label>
              <button type="button" className="destroy" />
            </div>
            <input type="text" className="edit" />
          </li>

          <li className="completed">
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>qwertyuio</label>
              <button type="button" className="destroy" />
            </div>
            <input type="text" className="edit" />
          </li>

          <li className="editing">
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>zxcvbnm</label>
              <button type="button" className="destroy" />
            </div>
            <input type="text" className="edit" />
          </li>

          <li>
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>1234567890</label>
              <button type="button" className="destroy" />
            </div>
            <input type="text" className="edit" />
          </li>
        </ul> */}
      </section>

      <footer className="footer">
        <span className="todo-count">
          {`${uncompletedTodos.length} items left`}
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
