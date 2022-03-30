import React from "react";

const Card = ({country}) => {
  return (
    <li className="card">
        <img src={country.flags.svg} alt={"flag of " + country.name.common} />
      <div className="infos">
        <h3>{country.name.common}</h3>
        <h4>{country.capital}</h4>
        <p>Pop: {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
