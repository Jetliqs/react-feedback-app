// import { AnimatePresence, motion } from 'framer-motion';
import FeedBackItem from './FeedBackItem';
import Spinner from './shared/Spinner';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackList() {
  const { feedbacks, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p>There is no Feedbacks yet.</p>;
  }

  const feedbackListElement = (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedBackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );

  return isLoading ? <Spinner /> : feedbackListElement;
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
