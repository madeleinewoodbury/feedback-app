import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackStats;
