const Display = ({ filtered }) => {
  if (filtered.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }

  if (filtered.length === 1) {
    return (
      <div>
        {filtered.map((country) => {
          return (
            <div key={country.ccn3}>
              <h1>{country.name.common}</h1>

              <p>Capital: {country.capital[0]}</p>
              <p key={country.cioc}>Area: {country.area}</p>

              <div key={country.cca2}>
                <h2> Languages:</h2>
                {Object.keys(country.languages).map((lang, i) => {
                  return (
                    <div key={lang}>
                      <p>{country.languages[lang]}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flag">{country.flag}</div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      {filtered.map((country) => {
        return <p key={country.cca2}>{country.name.common}</p>;
      })}
    </div>
  );
};

export default Display;
