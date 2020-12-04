import React from 'react';
import { Link } from 'react-router-dom'
import './Activity.css'
import Image from '../../assets/broken-image.jpeg'

function Activity(props) {

  return (
    <div>
      <Link className='all-activities' to={`activities/${props.id}`}>
        {
          props.image_url === null ?  
          <>
          <img className='activity-image' src={Image} alt='activity'/> 
            </>
            :
            <img className='activity-image' src={props.image_url} alt='activity'/> 
        }
      <div className='card-title'>{props.name}</div>
      <div className='card-description'>{props.description}</div>
    </Link>
    </div>
  );
}

export default Activity;