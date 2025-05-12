import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import FriendsList from '../components/FriendsList/FriendsList';
import SettleBalancesModal from '../components/SettleBalancesModal/SettleBalancesModal';
import { mockFriends } from '../mocks/mockFriends';

import {
  FaPeopleGroup,
  FaChartPie,
  FaMoneyBill1,
  FaPeopleArrows
} from "react-icons/fa6";
import SplitForm from '../components/SplitForm/SplitForm';

const Evenly = () => {
  const [friends, setFriends] = useState(mockFriends);
  const [selectedFriends, setSelectedFriends] = useState({});
  const [amount, setAmount] = useState(0);

  // For logging during development
  /* useEffect(() => {
    console.log(selectedFriends, Object.keys(selectedFriends))
  }); */

  const selectedFriendsNames = Object.keys(selectedFriends).filter(key => selectedFriends[key]); // Where key is true (not falsy)

  const selectedFriendsNamesText = selectedFriendsNames.length > 1
    ? selectedFriendsNames.slice(0, selectedFriendsNames.length - 1).join(', ') +
    " and " + selectedFriendsNames[selectedFriendsNames.length - 1]
    : selectedFriendsNames[0];

  const splittingText = selectedFriendsNames.length === 0 ? 'Select friends and split a bill' : `Splitting ₹${amount} with ${selectedFriendsNamesText}`;

  return (
    <>
      <Header />
      <div className="app-container">
        <div className='evenly-container'>
          <FriendsList
            friends={friends}
            setFriends={setFriends}
            selectedFriends={selectedFriends}
            setSelectedFriends={setSelectedFriends}
          />
          <div className='split-window'>
            <div className='splitting-text'>
              <FaPeopleGroup />
              <h2>{splittingText}</h2>
            </div>
            <div className='split-options'>
              <div className='split-option selected split-evenly'>
                <FaPeopleArrows />
                Split evenly
              </div>
              <div className='split-option split-by-amount'>
                <FaMoneyBill1 />
                Split by amount
              </div>
              <div className='split-option split-by-percentage'>
                <FaChartPie />
                Split by percentage
              </div>
            </div>
            <SplitForm />
          </div>
        </div>
        <SettleBalancesModal />
      </div>
    </>
  )
}

export default Evenly