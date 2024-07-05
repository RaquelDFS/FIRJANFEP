import Card from "../../components/Card";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.headers}>
          <div className={styles.headline}>
            <h1>O melhor site de consulta climática do mundo</h1>
          </div>
          <aside className={styles.aside}>
            <p>
              O site mais preciso sobre o tempo do mundo. Utilizamos a melhor
              API do mundo,{" "}
              <a href="https://www.weatherapi.com/" target="_blank">
                weatherapi
              </a>{" "}
              procidencia as melhores informações pelo menos desde o dia
              04/07/2024, pois foi quando eu conheci. Confira por você mesmo!
            </p>
          </aside>
        </div>

        <Card />
      </div>
    </>
  );
}
