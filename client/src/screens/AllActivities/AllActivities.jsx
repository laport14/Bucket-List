import React from 'react';
import { Link } from 'react-router-dom'
import Activity from '../../components/Activity/Activity';
import './AllActivities.css'

function AllActivities(props) {

  const activitiesJSX = props.activities.map((activity, index) => (
    <Activity
      id={activity.id}
      image_url={activity.image_url}
      name={activity.name}
      description={activity.description}
      key={index}
    />
  ))

  return (
    <div className='all-activities-container'>
      <h2 className='activities-hero-text'>What do you want to do before you die?</h2>
      <Link to='/activities/new'><button>Add An Activity</button></Link>
      <div className='activities'>{activitiesJSX}</div>
    </div>
  );
}

export default AllActivities;