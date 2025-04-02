import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchResults() {
  const { searchTerm } = useContext(SearchContext);  // Obtener el término de búsqueda desde el contexto

  return (
    <div>
      <h2>Resultados de búsqueda para: "{searchTerm}"</h2>
      {/* Aquí puedes mostrar los resultados según el término de búsqueda */}
    </div>
  );
}

export default SearchResults;
