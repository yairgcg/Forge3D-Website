import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";

const items = [
  { id: 1, name: "Realidad Aumentada" },
  { id: 2, name: "Realidad Virtual" },
  { id: 3, name: "Modelado 3D" },
  { id: 4, name: "Animación 3D" },
  { id: 5, name: "VFX" },
  { id: 6, name: "Desarrollo Web" },
];

function SearchPage() {
  const { searchTerm } = useContext(SearchContext);  // Obtenemos el término de búsqueda desde el contexto

  // Filtrar resultados
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log("Término de búsqueda desde el contexto:", searchTerm);
    console.log("Elementos filtrados:", filteredItems);
  }, [searchTerm]);

  return (
    <div style={{ paddingTop: "80px", padding: "20px" }}>
      <h2>Resultados de búsqueda para: "{searchTerm}"</h2>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default SearchPage;
