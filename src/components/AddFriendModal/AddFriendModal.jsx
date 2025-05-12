import React from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../common/Modal/Modal';
import { FaUserPlus } from 'react-icons/fa6';

const AddFriendModal = ({ showAddFriendModal, onToggleAddFriendModal }) => {
  return (
    <Modal show={showAddFriendModal}>
      <ModalHeader title={'Add friend'} icon={<FaUserPlus />} toggle={onToggleAddFriendModal} />
      <ModalBody>
        <p>Add a PayPal to split your bill with!</p>
        <br />
        <label htmlFor='total-amount'>Name</label>
        <input type='text' />
        <label>Avatar URL</label>
        <input type='text' />
      </ModalBody>
      <ModalFooter>
        <button className='evenly-button-default' onClick={onToggleAddFriendModal}>Cancel</button>
        <button className='evenly-button evenly-flex-center'>
          <FaUserPlus />
          Add
        </button>
      </ModalFooter>
    </Modal>
  )
}

export default AddFriendModal