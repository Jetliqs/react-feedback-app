import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ text }) {
  // add bgColor and textColor to the props object
  // const headerStyles = {
  //   backgroundColor: bgColor,
  //   color: textColor,
  // };

  return (
    <header /*style={headerStyles}*/>
      <div className="container">
        <Link to={'/'}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App UI',
  // bgColor: 'rgba(0,0,0,0.4)',
  // textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  // bgColor: PropTypes.string.isRequired,
  // textColor: PropTypes.string.isRequired,
};

export default Header;
