import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import SelectInput from './SelectInput';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    let value = +e.currentTarget.value;
    setSelected(value);
    select(value);
  };

  return (
    <ul className='rating'>
      {[...Array(10).keys()].map((i) => (
        <SelectInput
          key={i}
          id={i + 1}
          value={i + 1}
          handleChange={handleChange}
          checked={selected === i + 1}
        />
      ))}
    </ul>
  );
};

RatingSelect.propTypes = {
  select: PropTypes.func.isRequired,
};

export default RatingSelect;
