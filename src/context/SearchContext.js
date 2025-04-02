import React, { createContext, useState } from "react";

// Creamos el contexto de búsqueda
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");  // Este estado maneja el término de búsqueda

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}  {/* Este es el contenedor de toda la aplicación */}
    </SearchContext.Provider>
  );
};
