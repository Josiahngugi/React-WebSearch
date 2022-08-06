import "./styles.css";
import { useState } from "react";
import JsonData from "./DATA.json";

export default function App() {
  const [searchName, setSearchName] = useState("");

  function handleChange(e) {
    const searchedName = e.target.value;
    setSearchName(searchedName);
  }
  return (
    <div className="App">
      <input
        className="input"
        type="text"
        onChange={handleChange}
        placeholder="...Search Name"
        value={searchName}
      />
      {JsonData.filter((searchedData) => {
        if (searchName === "") {
          return searchedData;
        } else if (
          searchedData.first_name
            .toLowerCase()
            .includes(searchName.toLocaleLowerCase())
        ) {
          return searchedData;
        }
      }).map((data) => {
        return (
          <div key={data.id}>
            <p>{data.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
