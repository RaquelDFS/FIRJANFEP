export default function Home() {
  return (
    <>
      <div>
        <div>
          <h1>O melhor site de consulta climática do mundo</h1>
        </div>
        <div>
          <p>
            O site mais preciso sobre o tempo do mundo. Utilizamos a melhor API
            do mundo,{" "}
            <a href="https://www.weatherapi.com/" target="_blank">
              weatherapi
            </a>{" "}
            procidencia as melhores informações pelo menos desde o dia
            04/07/2024, pois foi quando eu conheci. Confira por você mesmo!
          </p>
        </div>
      </div>
      <div>
        <form action="">
          <fieldset>
            <p>icone</p>
            <input type="text" placeholder="Pesquise por cidade" />
            <button>Procurar</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
