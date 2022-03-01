const ADD_ROCKETS = 'redux/rockets/ADD_ROCKETS';
const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';

export const addRocket = (payload) => ({ type: ADD_ROCKETS, payload });

const handleRockets = (rocket) => {
  const rockets = [];
  rockets.push(rocket);

  return rockets;
};

export const getApiData = () => (dispatch) => fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((rocket) => {
      dispatch({
        type: ADD_ROCKETS,
        payload: handleRockets(rocket),
      });
    });
  });

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
