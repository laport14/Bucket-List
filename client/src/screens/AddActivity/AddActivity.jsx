import React, { useState } from 'react';
import './AddActivity.css'

function AddActivity(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    image_url: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <div className='content-container'>
      <h3 className='hero-text'>Create a Bucket-List Activity</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleCreate(formData)
        
      }} className='add-activity-form'>
        <h2 className='login-form-text'>Add an Activity or Idea</h2>
        <label htmlFor='image_url'></label>
        <input
          type='text'
          name='image_url'
          className='login-input'
          placeholder='Insert Image URL'
          value={formData.image_url}
          onChange={handleChange}
        />
        <label htmlFor='name'></label>
        <input
          type='text'
          name='name'
          className='login-input'
          placeholder='Enter Activity Title'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor='description'></label>
        <label htmlFor='price'></label>
        <input
          type='text'
          name='price'
          className='login-input'
          placeholder='Enter Activity Price'
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor='location'></label>
        <input
          type='text'
          name='location'
          className='login-input'
          placeholder='Enter Activity Location'
          value={formData.location}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='description'
          className='textarea-input'
          placeholder='Enter Activity Description'
          value={formData.description}
          onChange={handleChange}
        />
        <button className='add-submit-button'>Submit</button>
      </form>
      
    </div>
  );
}

export default AddActivity;