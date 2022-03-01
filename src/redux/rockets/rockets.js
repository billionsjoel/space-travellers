const ADD_ROCKETS = 'redux/rockets/ADD_ROCKETS';
const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';

export const addRocket = (payload) => ({ type: ADD_ROCKETS, payload });

const getApiData = () => {
  const apiRocketsData = fetch(ENDPOINT)
    .then((response) => response.json())
    .then((apiRocketsData) => apiRocketsData);
  return apiRocketsData;
};

export default getApiData;
