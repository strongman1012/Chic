
import { Button, Modal } from 'flowbite-react';

const ModalBook = (props) => {
  const { children, openModal, onClose, headerTitle, footerTitle, modalContentType, modalBack, serviceCheck, modalNext2, modalNext3, handleButtonClick } = props;

  return (
    <>
      <Modal dismissible show={openModal} onClose={onClose} >
        <Modal.Header> {headerTitle} </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          {
            modalContentType == "1" ? (
              <Button className="w-full bg-black" onClick={handleButtonClick}>
                {footerTitle}
              </Button>
            ) : (modalContentType == "2" ? (
              <div className='w-full flex justify-between'>
                <Button className="bg-white border-solid border-black text-black" onClick={modalBack}>
                  {"< Back"}
                </Button>
                <Button className="bg-black text-white" disabled={!serviceCheck} onClick={modalNext2}>
                  Next
                </Button>
              </div>
            ) : (
              <div className='w-full flex justify-between'>
                <Button className="bg-white border-solid border-black text-black" onClick={modalBack}>
                  {"< Back"}
                </Button>
                <Button className="bg-black text-white" onClick={modalNext3} >
                  Next
                </Button>
              </div>
            )

            )
          }

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalBook