import React from 'react';
import PropTypes from 'prop-types';

const MissionsTable = (props) => {
  const { missionsList } = props;

  return (
    <table className="missionsTable d-flex">
      <tbody>
        <tr className="tableTitles">
          <th className="tableCol1">Mission</th>
          <th className="tableCol2">Description</th>
          <th className="tableCol3">Status</th>
          <th className="tableCol4" aria-label="button join/leave" />
        </tr>
        {missionsList.map((mission) => (
          <tr key={mission.id}>
            <th className="bold">{mission.name}</th>
            <th>{mission.description}</th>
            {!mission.joined && (<th><p className="notMemberBadge bold">NOT A MEMBER</p></th>)}
            {mission.joined && (<th><p className="memberBadge bold">ACTIVE MEMBER</p></th>)}
            {!mission.joined && (<th><button className="joinMission click" type="button">Join Mission</button></th>)}
            {mission.joined && (<th><button className="leaveMission click" type="button">Leave Mission</button></th>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

MissionsTable.propTypes = {
  missionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  })).isRequired,
};

export default MissionsTable;
