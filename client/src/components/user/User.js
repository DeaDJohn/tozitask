import React from 'react'
import { Link } from 'react-router-dom';
import './User.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Width is the size to show the thumb of user.
export default function User({user, width = 75}) {
  console.log(user);
  if(!user){
    return (
      <div className='userItem__unlogin text-center'>
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
          <Link to="./" >Login</Link>
      </div>
    )
  }
  return (
    <div id={`user-${user.id}`} className='userItem'>
        <figure className='userItem__figure rounded-circle'>
            <img className='userItem__img img-fluid' src={user.img} width={width}/>
        </figure>
        <span>{user.username}</span>
    </div>
  )
}
