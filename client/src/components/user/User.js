import React from 'react'
import './User.scss';

// Width is the size to show the thumb of user.
export default function User({user, width = 75}) {

  return (
    <div id={`user-${user.id}`} className='userItem'>
        <figure className='userItem__figure rounded-circle'>
            <img className='userItem__img img-fluid' src={user.img} width={width}/>
        </figure>
        <span>{user.name}</span>
    </div>
  )
}
