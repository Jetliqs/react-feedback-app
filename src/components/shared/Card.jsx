import PropTypes from 'prop-types';

function Card({ children, reverse, edit }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
        boxShadow: edit
          ? '#ff6a95 0px 0px 0px 5px, rgba(0,0,0,0.4) 0px 0px 0px 11px'
          : 'none',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
