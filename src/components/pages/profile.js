import React from 'react';
import { useSelector } from 'react-redux';
import '../css/profile.scss';

const profile = () => {
  const missions = useSelector(({ missionsReducer }) => missionsReducer);
  const joinedMissions = missions.filter((missions) => missions.joined);

  return (
    <div className="profile-container d-flex jc-c">
      <div className="profile-missions">
        <p className="bold tableTitle">My Missions</p>
        <table>
          {joinedMissions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="profile-rockets">
        <p className="bold tableTitle">My Rockets</p>
        <table />
      </div>
    </div>
  );
};

export default profile;
