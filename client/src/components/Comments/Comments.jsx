import React from 'react';

function Comments(props) {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.comment}</p>
    </div>
  );
}

export default Comments;