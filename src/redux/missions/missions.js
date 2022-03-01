const api = 'https://api.spacexdata.com/v3/missions';

const fetchData = () => {
  const data = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getMissions = async () => fetchData();
