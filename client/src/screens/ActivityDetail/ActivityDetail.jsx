import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {getOneActivity} from '../../services/activities'

function ActivityDetail(props) {
  const [activity, setActivity] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchActivityItem = async () => {
      const activityData = await getOneActivity(id)
      setActivity(activityData)
    }
    fetchActivityItem()
  }, [id])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const activity = await 
  // }

  // const handleChange = (e) => {
  //   const { value } = e.target
  //   set
  // }

  return (
    <div>
      <h2>{activity?.name}</h2>
      <p>{activity?.description}</p>
      <p>{activity?.price}</p>
      <p>{activity?.location}</p>
      <Link className='edit-link' to={`/activities/${id}/edit`}><button>Edit</button></Link>
      <button>Delete</button>
      
    </div>
  );
}

export default ActivityDetail;