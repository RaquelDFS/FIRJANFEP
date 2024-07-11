import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
export default function Template() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
