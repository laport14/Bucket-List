import React from 'react';
import { Link } from 'react-router-dom'
import './Activity.css'

function Activity(props) {
  return (
    <div>
      <Link className='all-activities' to={`activities/${props.id}`}>
      <div>{props.name}</div>
      <div>{props.description}</div>
    </Link>
      
    </div>
  );
}

export default Activity;