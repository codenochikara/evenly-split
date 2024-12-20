import React from 'react';
import './scrollbar.css';

import {
  FaHandshakeAngle,
  FaPeopleGroup,
  FaPlus,
  FaCheck,
  FaXmark,
  FaTrashCan,
  FaChartPie,
  FaMoneyBill1,
  FaPeopleArrows,
  FaGhost,
  FaEllipsis,
  FaWandMagicSparkles
} from "react-icons/fa6";

function App() {
  return (
    <div className='container'>
      <header className='logo-header'>
        <FaHandshakeAngle className='fa-fade' />
        <h1>Evenly<span>.</span></h1>
      </header>
      <div className="app-container">
        <div className='evenly-container'>
          <div className='friends-list evenly-scrollbar'>
            <div className='friends-list__controls evenly-flex-space-between'>
              <div className='friend add-friend' role='button' tabIndex={0}>
                <div className='avatar'>
                  <button className='evenly-button-icon add-friend-button-icon' title='Add friend'>
                    <FaPlus />
                  </button>
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
            <div className='friend'>
              <img className='avatar' src='https://media.licdn.com/dms/image/v2/D5603AQGd7ZFJ8SBe1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721243739698?e=2147483647&v=beta&t=wI7HfehLSnetgamKyAjl7ElGYowcTGGadiMr3jiqxx0' alt='avatar' />
              <div className='info'>
                <p className='friend-name'>Shakti</p>
                <p className='you-owe'>You owe Shakti ₹ 500.</p>
              </div>
              <div className='select-friend evenly-flex-center'>
                <input type='checkbox' />
              </div>
              <button className='evenly-button-icon'>
                <FaXmark />
              </button>
            </div>
            <div className='friend'>
              <img className='avatar' src='https://media.licdn.com/dms/image/v2/D5603AQGd7ZFJ8SBe1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721243739698?e=2147483647&v=beta&t=wI7HfehLSnetgamKyAjl7ElGYowcTGGadiMr3jiqxx0' alt='avatar' />
              <div className='info'>
                <p className='friend-name'>Shakti</p>
                <p className='they-owe'>You owe Shakti ₹ 500.</p>
              </div>
              <div className='select-friend evenly-flex-center'>
                <input type='checkbox' />
              </div>
              <button className='evenly-button-icon'>
                <FaXmark />
              </button>
            </div>
            <div className='friend'>
              <img className='avatar' src='https://media.licdn.com/dms/image/v2/D5603AQGd7ZFJ8SBe1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721243739698?e=2147483647&v=beta&t=wI7HfehLSnetgamKyAjl7ElGYowcTGGadiMr3jiqxx0' alt='avatar' />
              <div className='info'>
                <p className='friend-name'>Shakti</p>
                <p className='you-owe'>You owe Shakti ₹ 500.</p>
              </div>
              <div className='select-friend evenly-flex-center'>
                <input type='checkbox' />
              </div>
              <button className='evenly-button-icon'>
                <FaXmark />
              </button>
            </div>
            <div className='friend add-friend no-friends'>
              <div className='avatar'>
                <FaGhost className='add-friend-button-icon' />
              </div>
              <p>No PayPals here!</p>
            </div>
          </div>
          <div className='split-window'>
            <div className='splitting-text'>
              <FaPeopleGroup />
              <h2>Splitting ₹ 1000 with Shakti, Shakti, Shakti</h2>
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
            <div className='split-form-container evenly-scrollbar'>
              <form className='split-form'>
                <label htmlFor='total-amount'>Total Amount</label>
                <div className='input-wrapper'>
                  <span>₹</span>
                  <input type='text' />
                </div>
                <label>You</label>
                <div className='input-wrapper'>
                  <span>₹</span>
                  <input type='text' />
                </div>
                <label>Shakti</label>
                <div className='input-wrapper'>
                  <span>₹</span>
                  <input type='text' />
                </div>
                <label>Shakti</label>
                <div className='input-wrapper'>
                  <span>₹</span>
                  <input type='text' />
                </div>
                <label>Shakti</label>
                <div className='input-wrapper'>
                  <span>₹</span>
                  <input type='text' disabled />
                </div>
                <label>Who's paying the bill?</label>
                <select>
                  <option>You</option>
                  <option>Shakti</option>
                  <option>Shakti</option>
                  <option>Shakti</option>
                </select>
              </form>
              <div className='form-buttons'>
                <button className='evenly-button-default'>Split History</button>
                <button className='evenly-button evenly-flex-center'>
                  <FaWandMagicSparkles />
                  Split
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
