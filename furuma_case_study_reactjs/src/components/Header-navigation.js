import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Route,
  Link,
  NavLink,
  Switch,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Footer } from "./Footer";
import CarouselTest from "./CarouselTest";

function CollapsibleExample() {
  const navigate = useNavigate();
  const handleNavigate = (facility, e) => {
    e.preventDefault();
    navigate(`/services/${facility}`);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <a className="navbar-brand" href="/">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
              className="card-img-top"
              alt="..."
            />
          </a>

          <Navbar.Brand href="#home">
            <Link to="/">Trang chủ</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Giới thiệu</Nav.Link>
              <NavDropdown title="Loại phòng" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={(e) => handleNavigate("villa", e)}
                >
                  Villa
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={(e) => handleNavigate("house", e)}
                >
                  House
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={(e) => handleNavigate("room", e)}
                >
                  Room
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown title="Quản lý" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to="services">Dịch vụ</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to="customers">Khách hàng</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
                  <Link to="contracts">Hợp đồng</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#deets">Đăng ký</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Đăng Nhập
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
}

export default CollapsibleExample;
