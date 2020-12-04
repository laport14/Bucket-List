import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../../components/Comments/Comments';
import {getOneActivity} from '../../services/activities'
import { addComment } from '../../services/comments';
import './ActivityDetail.css'

function ActivityDetail(props) {
  const [activity, setActivity] = useState(null)
  const [comments, setComments] = useState([])
  const [commentChange, setCommentChange] = useState(false)
  const [formData, setFormData] = useState({
    comment: ""
  })

  const { id } = useParams()

  useEffect(() => {
    const fetchActivityItem = async () => {
      const activityData = await getOneActivity(id)
      setActivity(activityData)
      setComments(activityData.comments)
      setCommentChange(commentChange)
    }
    fetchActivityItem()
  }, [id, commentChange])

  const handleSubmit = async (id, formData) => {
    await addComment(id, formData)
    setCommentChange(!commentChange)
    setFormData({comment:''})
  }

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
    <div className='detail-parent-container'>
    <div className='activity-detail-container'>
      <div className='activity-detail-component'>
      <img className='activity-detail-image' src={activity?.image_url} alt='activity'/>
      </div>
      <div className='activity-descriptive-content'>
      <h2>{activity?.name}</h2>
      <p>{activity?.description}</p>
      <p>{activity?.price}</p>
      <p>{activity?.location}</p>
      <Link className='edit-link' to={`/activities/${id}/edit`}><button>Edit</button></Link>
      <button onClick={() => props.handleDelete(activity.id)}>Delete</button>
      </div>
    </div>

      <div>
      <div>{commentsJSX}</div>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(id, formData)
        }}>
          <textarea
            placeholder="Insert comment here"
            name='comment'
            value={formData.comment}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      
      
    </div>
  );
}

export default ActivityDetail;