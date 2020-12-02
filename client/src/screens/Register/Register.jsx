import './Register.css'
import { useState } from 'react';

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image_url: ""
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
      <p className='hero-text'>Ready to make your wildest dreams come true?</p>
      <p>Bucket-List is an application where you can post your bucket list activities and ideas to the site and have other members give support by commenting on your posts! Share the site with your family and friends so they can join with you!</p>
      <form className='register-form' onSubmit={(e) => {
        e.preventDefault()
        props.handleRegister(formData)
      }}>
        <h2>Register</h2> 
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter Username'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Email'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter Password'
        />
        <label htmlFor='image_url'>Image_URL</label>
        <input
          type='text'
          name='image_url'
          value={formData.image_url}
          onChange={handleChange}
          placeholder='Insert Image URL'
        />
        <button>Submit</button>
      </form>
      </div>
  );
}

export default Register;