import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import './TaskList.scss';

function TaskList({ tasks, onTaskChange }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          label={task.label}
          checked={task.done}
          onTaskChange={onTaskChange}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskChange: PropTypes.func.isRequired,
};

export default TaskList;
