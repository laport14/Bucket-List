import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './EditActivity.css'

function EditActivity(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    image_url: ""
  })

  const { id } = useParams()

  useEffect(() => {
    const prefillForm = () => {
      const activity = props.activities.find(activity => activity.id === Number(id))
      setFormData({
        image_url: activity.image_url,
        name: activity.name,
        description: activity.description,
        price: activity.price,
        location: activity.location
      })
    }
    if (props.activities.length) {
      prefillForm()
    }
  }, [props.activities, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <div className='edit-container'>
      <div>
        <h2 className='edit-title'>Edit Your Activity</h2>
        <img src={formData.image_url} alt='activity' className='edit-image'/>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleUpdate(id, formData)
      }} className='edit-form'>
        <label htmlFor='image_url' className='edit-label'>Image URL</label>
        <input
          type='text'
          name='image_url'
          className='edit-input'
          value={formData.image_url}
          onChange={handleChange}
          />
        
        <label htmlFor='name' className='edit-label'>Name</label>
        <input
          type='text'
          name='name'
          className='edit-input'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor='description' className='edit-label'>Description</label>
        <textarea
          type='text'
          name='description'
          className='edit-text-input'
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor='price' className='edit-label'>Price</label>
        <input
          type='text'
          name='price'
          className='edit-input'
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor='location' className='edit-label'>Location</label>
        <input
          type='text'
          name='location'
          className='edit-input'
          value={formData.location}
          onChange={handleChange}
        />
        <button className='submit-button'>Submit</button>
      </form>
    </div>
  );
}

export default EditActivity;