import React from 'react';
import { Link } from 'react-router-dom'
import Activity from '../../components/Activity/Activity';
import './AllActivities.css'

function AllActivities(props) {

  const activitiesJSX = props.activities.map((activity, index) => (
    <Activity
      id={activity.id}
      name={activity.name}
      description={activity.description}
      key={index}
    />
  ))

  return (
    <div>
      <h2 className='activities-hero-text'>What do you want to do before you die?</h2>
      <div className='activities'>{activitiesJSX}</div>
    </div>
  );
}

export default AllActivities;