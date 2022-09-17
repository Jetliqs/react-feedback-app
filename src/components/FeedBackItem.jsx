import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackItem({ feedback }) {
  const { deleteFeedback, selectFeedback } = useContext(FeedbackContext);
  // return (
  //   <div className="card">
  //     <div className="num-display">{feedback.rating}</div>
  //     <div className="text-display">{feedback.text}</div>
  //   </div>
  // );

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes size={'15px'} />
      </button>
      <button className="edit">
        <FaEdit size={'14px'} onClick={() => selectFeedback(feedback)} />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedBackItem;
