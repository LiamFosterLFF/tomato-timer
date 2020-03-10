import React, { useState } from 'react'
import Navbar from './Navbar'
import Modal from './Modal'

const PanelComponent = (props) => {
    const [show, setShow] = useState(false)
    const [modalType, setModalType] = useState(null)

    const showModal = (type) => {
      setShow(true);
      setModalType(type);
    }

    const hideModal = () => {
      setShow(false);
      setModalType(null);
    }

    const modalProps = {
      "show": show,
      "setShow": setShow,
      "modalType": modalType,
      "hideModal": hideModal,
      ...props
    }

  return (
    <div className="PanelAndModal">
      <Modal {...modalProps}/>
      <div className='panel'>
        <div className='row'>
          <div className='column three'>
            <div className='title'>TomatoTimer</div>
          </div>
          <div className='column seven'>
            <Navbar showModal={showModal}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelComponent
