import React, { useState } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../common/Modal/Modal';
import { FaCheck, FaTrashCan } from 'react-icons/fa6';

const SettleBalancesModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Modal show={showModal}>
      <ModalHeader title={'Settle all balances?'} icon={<FaTrashCan />} />
      <ModalBody>
        <p>Are you sure you want to settle all balances?</p>
        <br />
        <p>This will clear and reset all the amounts owed.</p>
      </ModalBody>
      <ModalFooter>
        <button className='evenly-button-default'>Cancel</button>
        <button className='evenly-button evenly-flex-center'>
          <FaCheck />
          Yes
        </button>
      </ModalFooter>
    </Modal>
  )
}

export default SettleBalancesModal;
