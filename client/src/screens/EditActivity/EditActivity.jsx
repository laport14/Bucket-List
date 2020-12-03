import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

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
        name: activity.name,
        description: activity.description,
        price: activity.price,
        location: activity.location
      })
    }
    if (props.activities.length) {
      prefillForm()
    }
  }, [props.activities])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <div>
        <h2>Edit Your Activity</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleUpdate(id, formData)
      }}>
        <label htmlFor='image_url'>Image URL</label>
        <input
          type='text'
          name='image_url'
          value={formData.image_url}
          onChange={handleChange}
        />
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor='price'>Price</label>
        <input
          type='text'
          name='price'
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default EditActivity;