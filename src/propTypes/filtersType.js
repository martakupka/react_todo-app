import PropTypes from 'prop-types';

export const filtersType = PropTypes.shape({
  all: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
});
