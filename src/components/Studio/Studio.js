import React from 'react';
import { Link } from 'react-router-dom'


const Studio = ({studio:{name, image, id}}) => {
  return (
    <li className="studio" >
        <Link to={`/studio/${id}`}>
            <img className="studio-image" src={`/${image}`} alt="studio gallery" />
            <h2>{name}</h2>
        </Link>
    </li>
  );
}

export default Studio

