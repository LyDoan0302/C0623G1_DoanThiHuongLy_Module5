import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <a className="navbar-brand" href="#">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
            className="card-img-top"
            alt="..."
          />
        </a>

        <Navbar.Brand href="#home">Trang chủ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Giới thiệu</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Loại phòng" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Villa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">House</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Room</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Đăng ký</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Đăng Nhập
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
