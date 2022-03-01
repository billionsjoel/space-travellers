const api = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'missions/GET_MISSIONS';

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

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.playload;
    default:
      return state;
  }
};

export default missionsReducer;
export { loadMissions };
