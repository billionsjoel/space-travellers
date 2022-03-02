const ADD_ROCKETS = 'redux/rockets/ADD_ROCKETS';
const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';

const fetchData = () => {
  const data = fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getRockets = async () => fetchData();

const handleData = (data) => {
  const rockets = [];



  return rockets;
};

const loadRockets = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: ADD_ROCKETS,
    payload: handleData(rockets),
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
export { loadRockets };
