import React from 'react';
import { FaPlus, FaTrashCan } from 'react-icons/fa6';

const FriendsListControls = ({ onToggleAddFriendModal }) => {
  return (
    <div className='friends-list__controls evenly-flex-space-between'>
      <div
        className='friend add-friend'
        title='Add friend'
        role='button'
        tabIndex={0}
        onClick={onToggleAddFriendModal}
      >
        <div className='avatar'>
          <FaPlus className='add-friend-icon' />
        </div>
        <p>Add friend</p>
      </div>
      <button
        className='evenly-button evenly-flex-center delete-balances-button'
        title='Settle all balances'
      >
        <FaTrashCan />
      </button>
    </div>
  );
};

export default FriendsListControls;
