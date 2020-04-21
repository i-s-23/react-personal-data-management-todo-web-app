import React, { useState } from "react";
import Modal from "react-modal";
import InputLists from "../InptLists";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  modalIsOpen: boolean;
  handleModalClose: (value: boolean) => void;
  handleModalConfirm: (value: boolean) => void;
}

Modal.setAppElement("#root");
const ModalWindow: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={(): void => props.handleModalClose(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2> ModalWindow </h2>
        <InputLists />
        <button
          type="button"
          onClick={(): void => props.handleModalConfirm(false)}
        >
          登録
        </button>
      </Modal>
    </div>
  );
};
export default ModalWindow;
