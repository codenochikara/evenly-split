import React from 'react'
import { FaXmark } from 'react-icons/fa6'

const Friend = ({ friend, friends, setFriends, selectedFriends, setSelectedFriends }) => {
  const { id, name, avatar, balance } = friend;

  let oweTextJSX;
  if (balance < 0) {
    oweTextJSX = (
      <p className='you-owe'>
        You owe {name} ₹{Math.abs(balance)}.
      </p>
    )
  } else if (balance > 0) {
    oweTextJSX = (
      <p className='they-owe'>
        {name} owes you ₹{Math.abs(balance)}.
      </p>
    )
  } else if (balance === 0) {
    oweTextJSX = (
      <p className='settled'>
        You and {name} are even!
      </p>
    )
  }

  const handleSelectFriend = (event) => {
    const { name, checked } = event.target;
    setSelectedFriends((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  }

  const handleDeleteFriend = (id) => {
    const deletedFriend = friends.find((friend) => friend.id === id);

    // Remove friend from friends list
    setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== id));

    // Remove friend from selectedFriends list
    setSelectedFriends((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      delete updatedSelected[deletedFriend.name]; // Remove the deleted friend's entry
      return updatedSelected;
    });
  }

  return (
    <div className='friend'>
      <img className='avatar' src={avatar} alt='avatar' />
      <div className='info'>
        <p className='friend-name'>{name}</p>
        {oweTextJSX}
      </div>
      <div className='select-friend evenly-flex-center'>
        <input type='checkbox' id={id} name={name} checked={selectedFriends[name] || false} onChange={handleSelectFriend} />
      </div>
      <button className='evenly-button-icon' onClick={() => handleDeleteFriend(id)}>
        <FaXmark />
      </button>
    </div>
  )
}

export default Friend