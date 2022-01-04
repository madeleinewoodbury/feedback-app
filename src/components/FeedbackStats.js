import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const getAverage = () => {
    // Calculate average rating
    let average =
      feedback.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / feedback.length;

    // display one decimal, whole number if decimal is 0
    average.toFixed(1).replace(/[.,]0$/, '');
    return isNaN(average) ? 0 : average;
  };

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {getAverage()}</h4>
    </div>
  );
};

export default FeedbackStats;
