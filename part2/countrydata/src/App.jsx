import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import Display from "./components/Display";

function App() {
  const [country, setCountry] = useState("");
  const [all, setAll] = useState([]);
  const allCountriesUrl =
    "https://studies.cs.helsinki.fi/restcountries/api/all";

  useEffect(() => {
    const request = axios.get(allCountriesUrl);
    request
      .then((response) => {
        const data = response.data;
        setAll(data);
      })
      .catch(() => {});
  }, []);

  console.log(all);

  const handleCountry = (event) => {
    const value = event.target.value;
    console.log(value);
    setCountry(value);
  };

  const filtered = all.filter((obj) => {
    const foundCountry = obj.name.common;
    return foundCountry.toLowerCase().includes(country.toLowerCase());
  });

  console.log(filtered);

  const onSubmit = (event) => {
    event.preventDefault;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input value={country} onChange={handleCountry} />
        </div>

        <div>
          <Display filtered={filtered} />
        </div>
      </form>
    </div>
  );
}

export default App;
