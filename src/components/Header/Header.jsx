import "./Header.css";
import Search from "../Search/Search";
import { useState } from "react";
import axios from "axios";

function Header({ onDataUpdate }) {
  const [data, setData] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    console.log(searchValue);
    try {
      const apiKey = "bdc081bef27165738f86c22fa44f1ab3";

      if (!searchValue) {
        console.error("City is empty");
        return;
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`
      );

      console.log("API Response:", response);
      setData(response.data);

      onDataUpdate(response.data);
    } catch (error) {
      console.error("API Request Failed:", error);

      if (error.response) {
        console.error("Error Response Data:", error.response.data);
      }
    }
  };

  console.log(searchValue);

  return (
    <div className="header">
      <Search onSearchValueChange={setSearchValue} />
      <button onClick={() => fetchData()} type="button">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
