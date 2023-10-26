import PropTypes from 'prop-types';
import './Form.scss';

function Form({ inputValue, onInputChange, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
