import React from 'react';
import './Register.css'

function Register(props) {
  return (
    <div className='content-container'>
      <p className='hero-text'>Ready to make your wildest dreams come true?</p>
      <p>Bucket-List is an application where you can post your bucket list activities and ideas to the site and have other members give support by commenting on your posts! Share the site with your family and friends so they can join with you!</p>
      <form className='register-form'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          placeholder='Enter Username'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Enter Email'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='username'
          placeholder='Enter Password'
        />
        <button>Submit</button>
      </form>
      </div>
  );
}

export default Register;