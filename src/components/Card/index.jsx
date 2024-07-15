import { useState } from "react";
import styles from "./Card.module.css";
import { CiSearch } from "react-icons/ci";

export default function Card() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [isDay, setIsDay] = useState(0);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c3cdf871bbbb45d39c8135504240407&q=${city}&lang=pt`
      );
      if (response.status === 200) {
        const data = await response.json();
        setWeatherForecast(data);
        if (data.current && data.current.is_day !== null) {
          setIsDay(data.current.is_day);
        } else {
          setIsDay(1);
        }
      } else {
        setWeatherForecast(null);
        setIsDay(1);
      }
    } catch (error) {
      console.error("Erro ao buscar previsão do tempo:", error);
      setWeatherForecast(null);
      setIsDay(1);
    }
  };

  return (
    <>
      <div
        className={`${styles.bottom} ${
          styles[isDay === 1 ? "isDayLight" : "isNightLight"]
        }`}
      >
        <div className={styles.form}>
          <form action="" onSubmit={handleSearch}>
            <fieldset className={styles.fieldset}>
              <CiSearch className={styles.icon} />{" "}
              <input
                type="text"
                placeholder="Pesquise por cidade"
                value={city}
                onChange={handleChange}
              />
              <button type="submit">Procurar</button>
            </fieldset>
          </form>
        </div>
        <section className={`${styles.cardContainer}`}>
          {weatherForecast ? (
            <div className={styles.card}>
              <h2>{weatherForecast.location.name}</h2>
              <div className={styles.cardTemp}>
                <p>{weatherForecast.current.temp_c}°C</p>
                <p>/</p>
                <p>{weatherForecast.current.temp_f}°F</p>
              </div>
              <div className={styles.cardIcon}>
                <img src={weatherForecast.current.condition.icon} alt="" />
              </div>
              <p>{weatherForecast.current.condition.text}</p>
            </div>
          ) : (
            <img src="https://i.pinimg.com/150x150/64/f0/07/64f00767fb31572f91074ed188a0778b.jpg" />
          )}
        </section>
      </div>
    </>
  );
}
