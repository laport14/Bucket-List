import React, {useState} from 'react';
import './Login.css'

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
        <p className='hero-text'>Welcome Back</p>
        <p className='login-text'>Thank you for visiting our site, we are excited to have you be apart of our community of dreamers</p>
        <form className='login-form' onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin(formData)
      }}>
        <h2 className='login-form-text'>Login</h2>
          <label htmlFor='username'></label>
        <input
            className='login-input'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          placeholder='Enter username'
          autoFocus
          />
          <label htmlFor='password'></label>
          <input
            className='login-input'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter password'
          />
        <button className='submit-button'>Submit</button>
        </form>
      
      </div>
  );
}

export default Login;