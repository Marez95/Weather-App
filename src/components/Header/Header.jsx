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
        <img
          src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/91f34cc8-d5b1-4d66-4d1b-65b1a5205a00/preview"
          alt=""
        />
      </button>
    </div>
  );
}

export default Header;
