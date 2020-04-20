import * as React from "react";

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
          {" "}
          <select>
            {personalData.map(n => (
              <option>{n}</option>
            ))}
          </select>
          <button type="button">+</button>
        </div>
      </form>
    </div>
  );
};

export default Header;
