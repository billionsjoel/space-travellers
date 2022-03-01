const ADD_ROCKETS = 'redux/rockets/ADD_ROCKETS';
const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';

export const addRocket = (payload) => ({ type: ADD_ROCKETS, payload });

export const getApiData = () => (dispatch) => fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((rocket) => {
      dispatch({
        type: ADD_ROCKETS,
        payload: {
          item_id: rocket, ...data[rocket][0],
        },
      });
    });
  });

const initialState = [];
export default getApiData;
