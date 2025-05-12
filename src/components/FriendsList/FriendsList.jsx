import React, { useState } from 'react'
import FriendsListControls from '../FriendsListControls/FriendsListControls';
import Friend from '../Friend/Friend';
import NoFriends from '../other/NoFriends';
import AddFriendModal from '../AddFriendModal/AddFriendModal';

const FriendsList = ({ friends, setFriends, selectedFriends, setSelectedFriends }) => {
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);

  const handleToggleAddFriendModal = () => {
    setShowAddFriendModal(show => !show);
  }

  return (
    <div className='friends-list evenly-scrollbar'>
      <FriendsListControls
        showAddFriendModal={showAddFriendModal}
        onToggleAddFriendModal={handleToggleAddFriendModal}
      />
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          friends={friends}
          setFriends={setFriends}
          selectedFriends={selectedFriends}
          setSelectedFriends={setSelectedFriends}
        />
      ))}
      {!friends.length && <NoFriends />}
      <AddFriendModal
        showAddFriendModal={showAddFriendModal}
        onToggleAddFriendModal={handleToggleAddFriendModal}
      />
    </div>
  )
}

export default FriendsList