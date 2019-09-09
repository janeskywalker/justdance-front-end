import React from 'react';
import { Link } from 'react-router-dom'


const Studio = ({studio:{name, image, id}}) => {
  return (
    <li className="studio" >
        <Link to={`/studio/${id}`} className="studio-link">
            <img className="studio-image" src={`/${image}`} alt="studio gallery" />
            <p>{name}</p>
        </Link>
    </li>
  );
}

export default Studio

