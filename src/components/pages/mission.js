import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissions } from '../../redux/missions/missions';
import MissionsTable from './missions/missionsTable';
import '../css/missions.scss';

const mission = () => {
  const missionsList = useSelector(({ missionsReducer }) => missionsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsList.length) {
      dispatch(loadMissions());
    }
  }, []);

  return (
    <div className="missionsContainer d-flex jc-c">
      <MissionsTable missionsList={missionsList} />
    </div>
  );
};

export default mission;
