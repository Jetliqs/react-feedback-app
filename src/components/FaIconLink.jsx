import { FaQuestion, FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';

function FaIconList({ type }) {
  if (type === 'home') {
    return (
      <div className="link">
        <FaHome size={30} />
      </div>
    );
  } else if (type === 'about') {
    return (
      <div className="link">
        <FaQuestion size={30} />
      </div>
    );
  }
}

FaIconList.defaultProps = {
  type: 'home',
};

FaIconList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FaIconList;
