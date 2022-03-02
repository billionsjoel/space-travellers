import RocketItem from './rocketItem';

const rocket = () => {
  const rocketsList = useSelector(({ rocketsReducer }) => rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rocketsList.length) {
      dispatch(loadRockets());
    }
  }, []);

  return (
    <div className="rockets">
      <RocketItem rocketsList={rocketsList} />
    </div>
  );
};

export default rocket;
