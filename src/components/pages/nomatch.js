import { NavLink } from 'react-router-dom';

function nomatch() {
  return (
    <div className="text-center pt-1">
      <h3>
        404 . Page does not exist. Go back to
        {' '}
        <NavLink to="/">home page.</NavLink>
      </h3>
    </div>
  );
}

export default nomatch;
