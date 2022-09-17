// import { AnimatePresence, motion } from 'framer-motion';
import FeedBackItem from './FeedBackItem';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackList() {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>There is no Feedbacks yet.</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedBackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedBackList;

/* 
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
*/
