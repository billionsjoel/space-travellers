import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRockets } from '../../../redux/rockets/rockets';
import RocketItem from './rocketItem';

const rocket = () => {
  const rocketsList = useSelector(({ rocketsReducer }) => rocketsReducer);
  const dispatch = useDispatch();

  }, []);

  return (
    <div className="rockets">
      <RocketItem rocketsList={rocketsList} />
    </div>
  );
};

export default rocket;
