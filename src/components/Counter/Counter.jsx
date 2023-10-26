import PropTypes from 'prop-types';
import './Counter.scss';

function Counter({ incompleteTaskCount }) {
  return <p className="counter">{incompleteTaskCount} tâches en cours</p>;
}

Counter.propTypes = {
  incompleteTaskCount: PropTypes.number.isRequired,
};

export default Counter;
