import { useState } from "react";

export default function SearchApi() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=c3cdf871bbbb45d39c8135504240407&q=${city}&lang=pt`
    )
      .then((r) => {
        if (r.status === 200) {
          return r.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data);
      });
  };
  return (
    <div className="App">
      <section>
        <h1>ClimaTempo</h1>
        <input type="text" value={city} onChange={handleChange} />
        <button onClick={handleSearch}>Enviar</button>
      </section>
      <section>
        {weatherForecast ? (
          <>
            <img src={weatherForecast.current.condition.icon} alt="icne ne" />
            <p>{weatherForecast.current.condition.text}</p>
            <p>Temperatura: {weatherForecast.current.temp_c} C</p>
            <p>
              {weatherForecast.current.is_day ? (
                <p>Está de dia</p>
              ) : (
                <p>Está de noite</p>
              )}
            </p>
          </>
        ) : null}
      </section>
      <section></section>
    </div>
  );
}
