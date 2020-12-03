import React, {useState} from 'react';

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
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleCreate(formData)
      }}>
        <h3>Create a Bucket-List Activity</h3>
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

export default AddActivity;