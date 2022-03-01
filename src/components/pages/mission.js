import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissions } from '../../redux/missions/missions';

const mission = () => {
  const missionsList = useSelector(({ missionsReducer }) => missionsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsList.length) {
      dispatch(loadMissions());
    }
  }, []);

  return (
    <div>Check console for state updates.</div>
  );
};

export default mission;
