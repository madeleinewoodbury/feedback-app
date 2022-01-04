import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={(e) => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
