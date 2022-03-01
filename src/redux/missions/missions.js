const api = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'missions/GET_MISSIONS';
const BOOK_MISSION = 'missions/BOOK_MISSION';

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

const bookMission = (state, id) => (dispatch) => {
  const missions = [...state];

  missions.forEach((mission) => {
    if (mission.id === id) {
      let { joined } = mission;
      if (joined) {
        joined = false;
      } else {
        joined = true;
      }
    }
  });

  dispatch({
    type: BOOK_MISSION,
    playload: missions,
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.playload;
    case BOOK_MISSION:
      return action.playload;
    default:
      return state;
  }
};

export default missionsReducer;
export { loadMissions, bookMission };
