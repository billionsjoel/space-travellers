import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiData } from '../../../redux/rockets/rockets';
import RocketItem from './rocketItem';

function rocket() {
  const rocketList = useSelector(({ rocketsReducer }) => rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rocketList.length) {
      dispatch(getApiData());
    }
  }, []);

  return (
    <div className="rockets">
      {rocketList.map((rocket) => (
        <RocketItem
          key={rocket.id}
          id={rocket.id}
          title={rocket.company}
          category={rocket.description}
        />
      ))}
    </div>
  );
}

export default rocket;
