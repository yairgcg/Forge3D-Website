import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const items = [
  { id: 1, name: "Realidad Aumentada" },
  { id: 2, name: "Realidad Virtual" },
  { id: 3, name: "Modelado 3D" },
  { id: 4, name: "Animación 3D" },
  { id: 5, name: "VFX" },
  { id: 6, name: "Desarrollo Web" },
];

function SearchResults() {
  const { searchTerm } = useContext(SearchContext);

  // Filtrar resultados
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log("🧐 Término de búsqueda desde el contexto:", searchTerm);
    console.log("📌 Elementos filtrados:", filteredItems);
  }, [searchTerm]);

  return (
    <div style={{
      position: "absolute",
      top: "100px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "white",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 1000
    }}>
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

export default SearchResults;
