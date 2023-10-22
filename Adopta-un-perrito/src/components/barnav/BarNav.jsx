import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function BarNav({ linkIg, homeIg }) {
  return (
    <>
      <Navbar data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href={linkIg}>{homeIg}</Nav.Link>
            <Nav.Link href="#features">Gatitos</Nav.Link>
            <Nav.Link href="#pricing">Colabora</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
