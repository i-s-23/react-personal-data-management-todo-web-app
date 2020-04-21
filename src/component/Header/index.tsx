import * as React from "react";
import { useState } from "react";
import ModalWindow from "../ModalWindow";

export interface personalDataVo {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  bmi: number;
}

const Header: React.FC = () => {
  // const [humanDataArray, setHumanDataArray] =
  //   useState < Array<personalDataVo>([]);
  const personalData: Array<string> = ["身長", "体重", "BMI"];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const humanData: Array<personalDataVo> = [
    {
      name: "田中さん",
      birthday: "2000年11月25日",
      height: 180,
      weight: 70,
      bmi: 20.5
    }
  ];

  const handleModalClose = (val: boolean): void => {
    setModalIsOpen(false);
  };

  const handleModalConfirm = (val: boolean): void => {
    setModalIsOpen(false);
    console.log(props.name);
  };

  return (
    <div>
      <form>
        <div>
          <input
            className="form-control"
            id="formEventTitle"
            value=""
            // onChange={e => searchName(e.target.value)}
          />
        </div>
        <div>
          <select>
            {personalData.map((n: String) => (
              <option>{n}</option>
            ))}
          </select>
          <button type="button" onClick={(): void => setModalIsOpen(true)}>
            +
          </button>
          <ModalWindow
            modalIsOpen={modalIsOpen}
            handleModalClose={handleModalClose}
            handleModalConfirm={handleModalConfirm}
          />
        </div>
      </form>
      {/* {humanDataArray.map((h: personalDataVo) => {
        return <div>{h.name}</div>;
      })} */}
    </div>
  );
};

export default Header;
