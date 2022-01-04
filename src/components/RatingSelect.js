import { useState } from 'react';
import SelectInput from './SelectInput';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

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

export default RatingSelect;
