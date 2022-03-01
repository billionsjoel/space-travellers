const api = 'https://api.spacexdata.com/v3/missions';

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