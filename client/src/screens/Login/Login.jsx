import React, {useState} from 'react';
import Layout from '../../components/shared/Layout/Layout';
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
    <Layout>
      <div className='content-container'>
        <p className='hero-text'>Welcome Back</p>
        <p className='login-text'>Thank you for visit our site, we are excited to have you be apart of our community of dreamers</p>
        <form className='login-form' onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin(formData)
        }}>
          <label htmlFor='name'>Username</label>
          <input
            type='text'
            name='name'
            placeholder='Enter username'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter password'
          />
          <button>Submit</button>
        </form>
      
      </div>
    </Layout>
  );
}

export default Login;