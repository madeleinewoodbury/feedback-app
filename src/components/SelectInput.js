import PropTypes from 'prop-types';

const SelectInput = ({ id, value, handleChange, checked }) => {
  return (
    <li>
      <input
        type='radio'
        name='rating'
        id={`num${id}`}
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={`num${id}`}>{value}</label>
    </li>
  );
};

SelectInput.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default SelectInput;
