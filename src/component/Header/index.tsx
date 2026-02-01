import React, { useState } from "react";
import ModalWindow, { ModalFormVo } from "../ModalWindow/index";

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
    },
    {
      name: "石田さん",
      birthday: "2009年12月29日",
      height: 198,
      weight: 40,
      bmi: 9.5
    }
  ];

  const [humanDataDisp, sethumanDataDisp] = useState(humanData);

  const handleModalClose = (): void => {
    setModalIsOpen(false);
  };

  const handleModalConfirm = (modalForm: ModalFormVo): void => {
    setModalIsOpen(false);
    const human: Array<personalDataVo> = [
      {
        name: modalForm.name === undefined ? "" : modalForm.name,
        birthday: modalForm.birthday === undefined ? "" : modalForm.birthday,
        height: modalForm.height === undefined ? 0 : modalForm.height,
        weight: modalForm.weight === undefined ? 0 : modalForm.weight,
        bmi:
          modalForm.weight === undefined
            ? 0
            : modalForm.weight /
              (modalForm.height === undefined ? 0 : modalForm.height / 100) ** 2
      }
    ];

    sethumanDataDisp(humanData.concat(human));
  };

  const sortHumanData = (sortCategory: string): void => {
    const newHumanData = humanDataDisp.sort((a, b) => {
      if (sortCategory === "身長") {
        return a.height - b.height;
      }
      if (sortCategory === "体重") {
        return a.weight - b.weight;
      }
      return a.bmi - b.bmi;
    });
    sethumanDataDisp([...newHumanData]);
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
          <select onChange={(e): void => sortHumanData(e.target.value)}>
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
