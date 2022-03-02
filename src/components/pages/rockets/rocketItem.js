// import PropTypes from 'prop-types';

const rocketItem = (props) => {
  return rocketsList.map((rocket) => (
    <div className="rocket-container" key={rocket.id}>
      <>
        <div className="image">
          <img src={rocket.image} alt="" />
        </div>
        <div className="rocket-details">
          <h4>{rocket.company}</h4>
          <p>{rocket.description}</p>
          <button type="button" value={rocket.reserved}>
            Reserve
          </button>
        </div>
      </>
    </div>
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
