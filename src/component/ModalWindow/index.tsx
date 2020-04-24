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

export interface ModalFormVo {
  name?: string;
  birthday?: string;
  height?: number;
  weight?: number;
}
interface Props {
  modalIsOpen: boolean;
  handleModalClose: () => void;
  handleModalConfirm: (value: ModalFormVo) => void;
}

Modal.setAppElement("#root");
const ModalWindow: React.FC<Props> = (props: Props) => {
  const { modalIsOpen } = props;
  const [modalForm, setModalForm] = useState<ModalFormVo | undefined>(
    undefined
  );

  const updateForm = (part: ModalFormVo): void => {
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

  const handleChangeHeight = (value: string): void => {
    updateForm({ height: Number(value) });
  };

  const handleChangeWeight = (value: string): void => {
    updateForm({ weight: Number(value) });
  };

  const handleModalClose = (): void => {
    props.handleModalClose();
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
              onChange={(e): void => handleChangeHeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            体重
            <input
              value={modalForm?.weight}
              onChange={(e): void => handleChangeWeight(e.target.value)}
            />
          </label>
        </div>
        <button
          type="button"
          onClick={(): void => {
            if (modalForm !== undefined) {
              if (
                modalForm.name !== undefined ||
                modalForm.height !== undefined ||
                modalForm.birthday !== undefined ||
                modalForm.weight !== undefined
              ) {
                props.handleModalConfirm(modalForm);
              }
            }
          }}
        >
          登録
        </button>
      </Modal>
    </div>
  );
};
export default ModalWindow;
