import React from 'react';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const SplitForm = () => {
  return (
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
  )
}

export default SplitForm