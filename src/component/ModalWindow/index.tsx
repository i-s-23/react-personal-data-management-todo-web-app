import React, { useState } from "react";
import Modal from "react-modal";
import { type } from "os";
import Partial from "typescript";
import InputLists from "../InptLists";

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

interface Props {
  modalIsOpen: boolean;
  handleModalClose: (value: boolean) => void;
  handleModalConfirm: (value: boolean) => void;
}

export interface ModalFormVo {
  name: string;
  birthday: string;
  height: number;
  weight: number;
}

Modal.setAppElement("#root");
const ModalWindow: React.FC<Props> = (props: Props) => {
  const { modalIsOpen } = props;
  const [modalForm, setModalForm] = useState<ModalFormVo | undefined>(
    undefined
  );

  const updateForm = (part: Partial<ModalFormVo>): void => {
    setModalForm({
      ...modalForm,
      ...part
    });
  };

  const handleChangeName = (value: string): void => {
    updateForm({ name: value });
  };

  const handleChangeBirthday = (value: string): void => {
    updateForm({ birthday: value });
  };

  const handleChangeHeight = (value: number): void => {
    updateForm({ height: value });
  };

  const handleChangeWeight = (value: number): void => {
    updateForm({ weight: value });
  };

  const handleModalClose = (): void => {
    props.handleModalClose(false);
    setModalForm(undefined);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={(): void => handleModalClose()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2> ModalWindow </h2>
        <div>
          <label>
            名前
            <input
              value={modalForm?.name}
              onChange={(e): void => handleChangeName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            生年月日
            <input
              value={modalForm?.birthday}
              onChange={(e): void => handleChangeBirthday(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            身長
            <input
              value={modalForm?.height}
              onChange={(e): void => handleChangeHeight(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            体重
            <input
              value={modalForm?.weight}
              onChange={(e): void => handleChangeWeight(Number(e.target.value))}
            />
          </label>
        </div>
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
