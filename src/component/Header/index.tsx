import React, { useState } from "react";
import ModalWindow from "../ModalWindow";

export interface personalDataVo {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  bmi: number;
}

const Header: React.FC = () => {
  const personalData: Array<string> = ["身長", "体重", "BMI"];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const humanData: Array<personalDataVo> = [
    {
      name: "田中さん",
      birthday: "2000年11月25日",
      height: 180,
      weight: 70,
      bmi: 20.5
    },
    {
      name: "佐藤さん",
      birthday: "2011年12月25日",
      height: 170,
      weight: 80,
      bmi: 10.5
    },
    {
      name: "吉田さん",
      birthday: "2011年12月25日",
      height: 170,
      weight: 80,
      bmi: 10.5
    }
  ];

  const [humanDataDisp, sethumanDataDisp] = useState(humanData);

  const handleModalClose = (val: boolean): void => {
    setModalIsOpen(false);
  };

  const handleModalConfirm = (val: boolean): void => {
    setModalIsOpen(false);
    console.log(props.name);
  };

  const searchName = (searchWord: string | number): void => {
    sethumanDataDisp(
      humanData.filter(
        human =>
          searchWord === human.name ||
          searchWord === human.birthday ||
          Number(searchWord) === human.height ||
          Number(searchWord) === human.weight ||
          Number(searchWord) === human.bmi
      )
    );

    if (searchWord === "") {
      sethumanDataDisp(humanData);
    }
  };

  const deleteHumanData = (human: personalDataVo): void => {
    const newHumanData = humanDataDisp.filter(h => h !== human);
    sethumanDataDisp(newHumanData);
  };

  return (
    <div>
      <form>
        <div>
          <input
            className="form-control"
            id="formEventTitle"
            onChange={(e): void => searchName(e.target.value)}
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
      <form>
        {humanDataDisp.map((human: personalDataVo) => {
          return (
            <div>
              <div>
                {human.name}　
                <button
                  type="button"
                  onClick={(): void => deleteHumanData(human)}
                >
                  -
                </button>
              </div>
              <div>生年月日　{human.birthday}</div>
              <div>身長　{human.height}</div>
              <div>体重　{human.weight}</div>
              <div>BMI　{human.bmi}</div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Header;
