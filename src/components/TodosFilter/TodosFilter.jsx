import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const TodosFilter = ({ filterTodos }) => {
  const [filters, setFilters] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const selectFilter = (key) => {
    const updatedFilters = {
      all: false,
      active: false,
      completed: false,
      [key]: true,
    };

    setFilters(updatedFilters);
    filterTodos(updatedFilters);
  };

  return (
    <ul className="filters">
      {Object.keys(filters).map((key) => {
        const text = key[0].toUpperCase() + key.slice(1);

        return (
          <li key={key}>
            <a
              href={`#/${key}`}
              className={classNames('', { selected: filters[key] })}
              onClick={() => selectFilter(key)}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

TodosFilter.propTypes = {
  filterTodos: PropTypes.func.isRequired,
};
