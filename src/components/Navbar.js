// Navbar.js
import React, { useState, useContext, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { CgFileDocument } from "react-icons/cg";
import { SearchContext } from "../context/SearchContext"; // Importa el contexto
import logo from "../Assets/3DForge.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { setSearchTerm } = useContext(SearchContext);  // Usamos el contexto para acceder a setSearchTerm
  const [search, setSearch] = useState("");  // Estado local para controlar la entrada del buscador
  const navigate = useNavigate(); // Para redirigir

  useEffect(() => {
    if (search) {
      // Solo redirige si el término de búsqueda no está vacío
      navigate("/search");
    }
  }, [search]);  // Dependencia de 'search' para redirigir

  // Actualiza el color de la barra de navegación al hacer scroll
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Maneja el evento de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Término ingresado antes de setSearchTerm:", search); 
    setSearchTerm(search);
    console.log("Redirigiendo a /search..."); 
    navigate("/search");
};


  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="IMAGEN" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => updateExpanded(expand ? false : "expanded")}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome /> Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser /> Acerca de Nosotros
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen /> Proyectos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blog" onClick={() => updateExpanded(false)}>
                <ImBlog /> Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/testimonials" onClick={() => updateExpanded(false)}>
                <CgFileDocument /> Testimonios
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Form className="d-flex ms-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}  // Actualiza el estado 'search'
            />
            <button type="submit" style={{ background: "none", border: "none" }}>
              <AiOutlineSearch className="search-icon" size={25} />
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
