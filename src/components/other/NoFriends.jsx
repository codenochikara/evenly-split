import React from 'react'
import { FaGhost } from 'react-icons/fa6'

const NoFriends = () => {
  return (
    <div className='friend add-friend no-friends'>
      <div className='avatar'>
        <FaGhost className='add-friend-icon' />
      </div>
      <p>No PayPals here!</p>
    </div>
  )
}

export default NoFriends