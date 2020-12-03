import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../../components/Comments/Comments';
import {getOneActivity} from '../../services/activities'

function ActivityDetail(props) {
  const [activity, setActivity] = useState(null)
  const [comments, setComments] = useState([])
  const [formData, setFormData] = useState({
    comment: ""
  })

  const { id } = useParams()

  useEffect(() => {
    const fetchActivityItem = async () => {
      const activityData = await getOneActivity(id)
      setActivity(activityData)
      setComments(activityData.comments)
    }
    fetchActivityItem()
  }, [id])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const activity = await 
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const commentsJSX = comments.map((comments, index) => (
    <Comments 
      comment={comments.comment}
      username={comments.user.username}
      key={index}
    />
  ))

  return (
    <div>
      <div>
      <img src={activity?.image_url} alt='activity'/>
      <h2>{activity?.name}</h2>
      <p>{activity?.description}</p>
      <p>{activity?.price}</p>
      <p>{activity?.location}</p>
      <Link className='edit-link' to={`/activities/${id}/edit`}><button>Edit</button></Link>
      <button onClick={() => props.handleDelete(activity.id)}>Delete</button>
      </div>
      <div>{commentsJSX}</div>

      <div>
        <form>
          <textarea
            placeholder="Insert comment here"
            name='comment'
            value={formData.comment}
            onChange={handleChange}
          />
        </form>
      </div>
      
    </div>
  );
}

export default ActivityDetail;