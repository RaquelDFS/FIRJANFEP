import Container from "./components/Container/index";
export default function App() {
  return (
    <main>
      <Container>
        <div className="container">
          <h1>Busque uma cidade</h1>
          <p>Descubra informações sobre o clima de qualquer cidade do mundo!</p>
          <div>
            <input type="text" />
            <button>Buscar</button>
          </div>
        </div>
      </Container>
    </main>
  );
}
