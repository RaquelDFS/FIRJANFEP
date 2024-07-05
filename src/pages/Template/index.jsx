import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
export default function Template() {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
