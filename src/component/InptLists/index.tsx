import React, { useState } from "react";

function InputLists() {
  //   const [items, setItems] = useState([{name: { label: "名前", value: String }}, {birthday: { label: "生年月日", value: Date() }},{ height: { label: "身長", value: Number }},{ weight: { label: "身長", value: Number }}]);
  // const [items, setItems] = useState([
  //   { label: "名前", value: String },
  //   { label: "生年月日", value: Date() },
  //   { label: "身長", value: Number },
  //   { label: "身長", value: Number }
  // ]);

  const personalDatalabels: Array<String> = [
    "名前",
    "生年月日",
    "身長",
    "体重",
  ];

  return (
    <div>
      {personalDatalabels.map((labels) => (
        <div>
          <label>
            {labels}
            <input />
          </label>
        </div>
        // <input
        //   value={item.value}
        //   name={item.label.toString()}
        // //   onChange={updateField}
        // />
      ))}
    </div>
  );
}

export default InputLists;
