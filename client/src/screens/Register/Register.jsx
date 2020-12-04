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
        <h2 className='login-form-text'>Sign up for an Account</h2> 
        <label htmlFor='username'></label>
        <input
          type='text'
          name='username'
          className='login-input'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter Username'
          autoFocus
        />
        <label htmlFor='email'></label>
        <input
          type='email'
          name='email'
          className='login-input'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Email'
        />
        <label htmlFor='password'></label>
        <input
          type='password'
          name='password'
          className='login-input'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter Password'
        />
        <label htmlFor='image_url'></label>
        <input
          type='text'
          name='image_url'
          className='login-input'
          value={formData.image_url}
          onChange={handleChange}
          placeholder='Insert Image URL'
        />
        <button className='submit-button'>Submit</button>
      </form>
      </div>
  );
}

export default Register;