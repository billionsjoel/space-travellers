import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiData } from '../../redux/rockets/rockets';

function rocket() {
  const rocketList = useSelector(({ rocketsReducer }) => rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rocketList.length) {
      dispatch(getApiData());
    }
  }, []);

  return <div>Check Console for data</div>;
}

export default rocket;
