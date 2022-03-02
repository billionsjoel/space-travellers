const ADD_ROCKETS = 'redux/rockets/ADD_ROCKETS';
const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';
const RESERVE_ROCKET = 'redux/missions/RESERVE_ROCKET';

const fetchData = () => {
  const data = fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getRockets = async () => fetchData();

const handleData = (data) => {
  const rockets = [];

  data.forEach((rocket) => {
    const {
      rocket_id: id,
      rocket_name: company,
      description,
      flickr_images: image,
    } = rocket;
    const newRocket = {
      id,
      company,
      description,
      image,
      reserved: false,
    };
    rockets.push(newRocket);
  });

  return rockets;
};

const loadRockets = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: ADD_ROCKETS,
    payload: handleData(rockets),
  });
};

const reserveRocket = (state, id) => (dispatch) => {
  const rockets = [...state];

  for (let i = 0; i < rockets.length; i += 1) {
    const current = rockets[i];
    if (current.id === id) {
      if (current.reserved) {
        current.reserved = false;
      } else {
        current.reserved = true;
      }
    }
  }

  dispatch({
    type: RESERVE_ROCKET,
    playload: rockets,
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return action.playload;
    default:
      return state;
  }
};

export default rocketsReducer;
export { loadRockets, reserveRocket };
