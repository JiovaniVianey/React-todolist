import PropTypes from 'prop-types';

function TaskItem({ id, label, checked, onTaskChange }) {
  return (
    <li>
      <label className={`list-item${checked ? ' list-item--done' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onTaskChange(id)}
          id={id}
        />
        {label}
      </label>
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onTaskChange: PropTypes.func.isRequired,
};

export default TaskItem;
