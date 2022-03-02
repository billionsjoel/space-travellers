// import PropTypes from 'prop-types';

const rocketItem = (props) => {
  const { rocketsList } = props;
  return rocketsList.map((rocket) => (
    
  ));
};

// rocketItem.propTypes = {
//  rocketsList: PropTypes.arrayOf(
//    PropTypes.shape({
//      id: PropTypes.string.isRequired,
//      company: PropTypes.string.isRequired,
//      description: PropTypes.string.isRequired,
//      joined: PropTypes.bool.isRequired,
//    }),
//  ).isRequired,
// };

export default rocketItem;
