import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importamos Link para hacer los elementos clickeables

const items = [
  { id: 1, name: "Realidad Aumentada", link: "/realidad-aumentada" },
  { id: 2, name: "Realidad Virtual", link: "/realidad-virtual" },
  { id: 3, name: "Modelado 3D", link: "/modelado-3d" },
  { id: 4, name: "Animación 3D", link: "/animacion-3d" },
  { id: 5, name: "VFX", link: "/vfx" },
  { id: 6, name: "Desarrollo Web", link: "/desarrollo-web" },
];

function SearchResults() {
  const { searchTerm } = useContext(SearchContext);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container
      style={{
        marginTop: "60px", // Espacio superior (ajústalo según sea necesario)
        minHeight: "calc(100vh - 100px)", // Ocupa toda la altura disponible de la pantalla
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Alinea el contenido en la parte superior
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          margin: "0 auto",
          minHeight: "200px",
          overflowY: "auto",
        }}
      >
        <h2>Resultados de búsqueda para: "{searchTerm}"</h2>
        {filteredItems.length > 0 ? (
          <ul style={{ paddingLeft: "20px" }}> {/* Ajuste para quitar la viñeta */}
            {filteredItems.map(item => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <Link
                  to={item.link} // Redirige a la pantalla correspondiente
                  style={{
                    textDecoration: "none",
                    color: "#007bff", // Color azul
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </Container>
  );
}

export default SearchResults;
