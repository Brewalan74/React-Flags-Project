import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedContinent, setSelectedContinent] = useState("");
  const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
  // useEffect work when component is called
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          name="range"
          id="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {continents.map((continent) => (
          <li>
            <input
              type="radio"
              name="continentRadio"
              checked={continent === selectedContinent}
              id={continent}
              onChange={(e) => setSelectedContinent(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedContinent &&
          <button onClick={() => setSelectedContinent("")}>Back to World!</button>
      }
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedContinent))
          .sort((a,b) => b.population-a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
