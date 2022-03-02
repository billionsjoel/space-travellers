const ADD_ROCKETS = 'redux/rockets/ADD_ROCKETS';
const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';



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
