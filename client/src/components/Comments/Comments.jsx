import React from 'react';
import './Comments.css'
function Comments(props) {
  return (
    <div className='comment'>
      <p>Username: {props.username}</p>
      <p> Comment: {props.comment}</p>
    </div>
  );
}

export default Comments;