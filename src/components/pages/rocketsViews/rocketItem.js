import '../../css/rockets.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../../redux/rockets/rockets';

const rocketItem = (props) => {
  const { rocketsList } = props;
  const dispatch = useDispatch();

  const handleBooking = (rocketsList, id) => {
    dispatch(reserveRocket(rocketsList, id));
  };

  return rocketsList.map((rocket) => (
    <div className="rocket-container" key={rocket.id}>
      <>
        <div className="image">
          <img src={rocket.image} alt="" />
        </div>
        <div className="rocket-details">
          <h4>{rocket.company}</h4>
          <p>
            {rocket.reserved && (
            <span className="rocket-badge bold">reserved </span>
            )}
            {rocket.description}
          </p>
          {!rocket.reserved && (
          <div>
            <p className="memberBadge bold">RESERVE ROCKET</p>
          </div>
          )}
          {!rocket.reserved && (
          <div>
            <button
              name={rocket.id}
              className="reserve-btn primary click"
              type="button"
              onClick={() => handleBooking(rocketsList, rocket.id)}
            >
              RESERVE ROCKET
            </button>
          </div>
          )}
          {rocket.reserved && (
          <div>
            <button
              name={rocket.id}
              className="reserve-btn danger click"
              type="button"
              onClick={() => handleBooking(rocketsList, rocket.id)}
            >
              CANCEL ROCKET
            </button>
          </div>
          )}
        </div>
      </>
    </div>
  ));
};

rocketItem.propTypes = {
  rocketsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.arrayOf(PropTypes.string).isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default rocketItem;
