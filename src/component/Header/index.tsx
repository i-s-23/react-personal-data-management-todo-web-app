import * as React from "react";
import ModalWindow from "../ModalWindow";
import { useState } from "react";

export interface personalDataVo {
  name: String;
  birthday: String;
  height: Number;
  weight: Number;
  bmi: Number;
}

const Header: React.FC = () => {
  const [humanDataArray, setHumanDataArray] =
    useState < Array<personalDataVo>([]);
  const personalData: Array<String> = ["身長", "体重", "BMI"];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const humanData: Array<personalDataVo> = [
    {
      name: "田中さん",
      birthday: "2000年11月25日",
      height: 180,
      weight: 70,
      bmi: 20.5,
    },
  ];

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
            {personalData.map((n) => (
              <option>{n}</option>
            ))}
          </select>
          <button type="button" onClick={(): void => setModalIsOpen(true)}>
            +
          </button>
          <ModalWindow />
        </div>
      </form>
      {humanDataArray.map((h: personalDataVo) => {
        return <div>{h.name}</div>;
      })}
    </div>
  );
};

export default Header;
