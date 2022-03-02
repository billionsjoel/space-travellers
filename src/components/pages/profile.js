import React from 'react';
import { useSelector } from 'react-redux';
import '../css/profile.scss';

const profile = () => {
  const missions = useSelector(({ missionsReducer }) => missionsReducer);
  const joinedMissions = missions.filter((missions) => missions.joined);

  const rockets = useSelector(({ rocketsReducer }) => rocketsReducer);
  const reservedRockets = rockets.filter((rockets) => rockets.reserved);

  return (
    <div className="profile-container d-flex jc-c">
      <div className="profile-missions">
        <p className="bold tableTitle">My Missions</p>
        <div className="profile-list">
          {joinedMissions.map((mission) => (
            <ul key={mission.id}>
              <li>{mission.name}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="profile-rockets">
        <p className="bold tableTitle">My Rockets</p>
        <div className="profile-list">
          {reservedRockets.map((rocket) => (
            <ul key={rocket.id}>
              <li>{rocket.company}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default profile;
