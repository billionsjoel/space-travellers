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
            {!mission.joined && (<th><p>Not a member</p></th>)}
            {!mission.joined && (<th><button type="button">Join Mission</button></th>)}
            {mission.joined && (<th><p>Active Member</p></th>)}
            {mission.joined && (<th><button type="button">Leave Mission</button></th>)}
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
