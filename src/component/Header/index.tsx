import * as React from "react";
import ModalWindow from "../ModalWindow";

const Header: React.FC = () => {
  const personalData: Array<String> = ["身長", "体重", "BMI"];

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
            {personalData.map(n => (
              <option>{n}</option>
            ))}
          </select>
          <ModalWindow />
        </div>
      </form>
    </div>
  );
};

export default Header;
