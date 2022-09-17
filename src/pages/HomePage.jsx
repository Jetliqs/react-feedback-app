import { Link } from 'react-router-dom';
import FeedBackList from '../components/FeedBackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import FaIconList from '../components/FaIconLink';

import { FeedbackProvider } from '../context/FeedbackContext';

function HomePage() {
  return (
    <FeedbackProvider>
      <Link to="/about">
        <FaIconList type={'about'} />
      </Link>
      <FeedbackForm />
      <FeedbackStats />
      <FeedBackList />
    </FeedbackProvider>
  );
}

export default HomePage;
