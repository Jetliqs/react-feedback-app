import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
import FaIconList from '../components/FaIconLink';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is React App to leave feedback for a product or a service</p>
        <p>Version: 1.0.0</p>
      </div>
      <Link className="link" to={'/'}>
        <FaIconList />
      </Link>
    </Card>
  );
}

export default AboutPage;
