import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");
const ModalWindow: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={(): void => setModalIsOpen(true)}>
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={(): void => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2> ModalWindow </h2>
        <div>Opend</div>
        <button type="button" onClick={(): void => setModalIsOpen(false)}>
          登録
        </button>
      </Modal>
    </div>
  );
};
export default ModalWindow;
