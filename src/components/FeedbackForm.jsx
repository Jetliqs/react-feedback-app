import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { addFeedback, selectedFeedback, setSelectedFeedback, updateFeedback } =
    useContext(FeedbackContext);

  const [rating, setRating] = useState(10);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedFeedback.edit === true) {
      setText(selectedFeedback.feedback.text);
      setRating(selectedFeedback.feedback.rating);
      setBtnDisabled(false);
    }
  }, [selectedFeedback]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters.');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const createFeedback = (e) => {
    e.preventDefault();
    const newFeedback = {
      text: text,
      rating: rating,
    };

    if (selectedFeedback.edit === true) {
      updateFeedback(selectedFeedback.feedback.id, newFeedback);
      setSelectedFeedback({
        feedback: {},
        edit: false,
      });
    } else {
      addFeedback(newFeedback);
    }
    setText('');
    setBtnDisabled(true);
  };

  /*
  const updateFeedback = (e) => {
    e.preventDefault();
    // get the feedback fron the feedbacks list
    const selFeedback = feedbacks.filter(
      (feedback) => selectedFeedback.feedback.id === feedback.id
    );
    // find the index of the selected feedback in the feedbacks array
    const isSelectedFeedback = (feedback) => {
      return feedback === selFeedback[0];
    };

    const selectedFeedbackIndex = feedbacks.findIndex(isSelectedFeedback);

    const updatedFeedback = {
      id: selFeedback[0].id,
      text: text,
      rating: rating,
    };

    editFeedback(feedbacks.splice(selectedFeedbackIndex, 1, updatedFeedback));
    setFeedback(feedbacks);
    setSelectedFeedback({
      feedback: {},
      edit: false,
    });
  };

  const handleFeedback = (e) => {
    if (selectedFeedback.edit === false) {
      createFeedback(e);
    } else if (selectedFeedback.edit === true) {
      updateFeedback(e);
    }
  };
  */

  return (
    <Card edit={selectedFeedback.edit}>
      <form className="feedback-form" onSubmit={createFeedback}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(r) => setRating(r)} />
        <div className="input-area">
          <input
            type="text"
            className="feedback-text"
            placeholder="Write your review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type={'submit'} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
