const api = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'redux/missions/GET_MISSIONS';
const JOIN_MISSION = 'redux/missions/JOIN_MISSION';

const fetchData = () => {
  const data = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getMissions = async () => fetchData();

const handleData = (data) => {
  const missions = [];

  data.forEach((mission) => {
    const { mission_id: id, mission_name: name, description } = mission;
    const newMission = {
      id,
      name,
      description,
      joined: false,
    };
    missions.push(newMission);
  });

  return missions;
};

const loadMissions = () => async (dispatch) => {
  const missions = await getMissions();

  dispatch({
    type: GET_MISSIONS,
    playload: handleData(missions),
  });
};

const joinMission = (state, id) => (dispatch) => {
  const missions = [...state];

  for (let i = 0; i < missions.length; i += 1) {
    const current = missions[i];
    if (current.id === id) {
      if (current.joined) {
        current.joined = false;
      } else {
        current.joined = true;
      }
    }
  }

  dispatch({
    type: JOIN_MISSION,
    playload: missions,
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.playload;
    case JOIN_MISSION:
      return action.playload;
    default:
      return state;
  }
};

export default missionsReducer;
export { loadMissions, joinMission };
