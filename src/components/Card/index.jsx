import styles from "./Card.module.css";
import { CiSearch } from "react-icons/ci";

export default function Card() {
  const isDay = 0;
  return (
    <>
      <div>
        <hr />
      </div>
      <div
        className={`${styles.bottom} ${
          styles[isDay == 1 ? "isDayLight" : "isNightLight"]
        }`}
      >
        <div className={styles.form}>
          <form action="">
            <fieldset className={styles.fieldset}>
              <CiSearch className={styles.icon} />{" "}
              <input type="text" placeholder="Pesquise por cidade" />
              <button>Procurar</button>
            </fieldset>
          </form>
        </div>
        <section className={`${styles.cardContainer}`}>
          <div className={styles.card}>
            <h2>Boston</h2>
            <div className={styles.cardTemp}>
              <p>90°F</p>
              <p>/</p>
              <p>40°C</p>
            </div>
            <div className={styles.cardIcon}>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/116.png"
                alt=""
              />
            </div>
            <p>Partly cloudy</p>
          </div>
        </section>
      </div>
    </>
  );
}
