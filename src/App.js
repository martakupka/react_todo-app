import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [allTogglerStatus, setAllTogglerStatus] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({
    all: true,
    active: false,
    completed: false,
  });

  useEffect(() => {
    setActiveTodos(todos.filter(todo => !todo.completed));
  }, [todos]);

  useEffect(() => {
    if (todos.length > 0) {
      setAllTogglerStatus(activeTodos.length === 0);
    }
  }, [activeTodos, todos.length]);

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

  const updateTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todoId !== todo.id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed,
      };
    });

    setTodos(updatedTodos);
  };

  const toggleAll = () => {
    let updatedTodos;

    if (allTogglerStatus) {
      updatedTodos = todos.map(todo => ({
        ...todo,
        completed: false,
      }));
    } else {
      updatedTodos = todos.map(todo => ({
        ...todo,
        completed: true,
      }));
    }

    setTodos(updatedTodos);
  };

  const filterTodos = (filters) => {
    setCurrentFilters(filters);
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

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

      {todos.length === 0 ? null
        : (
          <>
            <section className="main">
              <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                checked={allTogglerStatus}
                onChange={toggleAll}
              />
              <label htmlFor="toggle-all">Mark all as complete</label>

              {todos.length > 0
                ? (
                  <TodoList
                    items={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    allTogglerStatus={allTogglerStatus}
                    filters={currentFilters}
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
                {`${activeTodos.length} items left`}
              </span>

              <TodosFilter filterTodos={filterTodos} />

              {/* <ul className="filters">
                <li>
                  <a href="#/" className="selected">All</a>
                </li>

                <li>
                  <a href="#/active">Active</a>
                </li>

                <li>
                  <a href="#/completed">Completed</a>
                </li>
              </ul> */}

              <button
                type="button"
                className={classNames(
                  'clear-completed',
                  { hidden: todos.every(todo => !todo.completed)
                    || todos.length === 0 },
                )}
                onClick={clearCompletedTodos}
              >
                Clear completed
              </button>
            </footer>
          </>
        )
      }
    </section>
  );
}

export default App;
