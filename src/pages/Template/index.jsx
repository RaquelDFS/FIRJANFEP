import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Template() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}
