import React from 'react';
import { Link } from 'react-router-dom'


const Studio = ({studio:{name, image, _id}}) => {
  return (
    <li className="studio" >
        {/* go to one studio */}
        <Link to={`/studio/${_id}`} className="studio-link">
          <img className="studio-image" src={`/${image}`} alt="studio gallery" />
        </Link>
        <Link to={`/studio/${_id}`} className="studio-link">
            <p>{name}</p>
        </Link>
    </li>
  );
}

export default Studio

