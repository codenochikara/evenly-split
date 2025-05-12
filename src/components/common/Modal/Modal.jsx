import { FaXmark } from 'react-icons/fa6';

import './Modal.css';

export const ModalHeader = ({ title, icon, toggle }) => {
  return (
    <div className='modal-header evenly-flex-space-between'>
      <div className='evenly-flex-center'>
        {icon}
        <h2>{title}</h2>
      </div>
      <button className='evenly-button evenly-flex-center modal-close-button' onClick={toggle}>
        <FaXmark />
      </button>
    </div>
  )
}

export const ModalBody = ({ children }) => {
  return (
    <div className='modal-body'>
      {children}
    </div>
  )
}

export const ModalFooter = ({ children }) => {
  return (
    <div className='modal-footer evenly-flex-space-between evenly-flex-wrap'>
      {children}
    </div>
  )
}

const Modal = ({ show, children }) => {
  if (!show) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        {children}
      </div>
    </div>
  )
}

export default Modal;