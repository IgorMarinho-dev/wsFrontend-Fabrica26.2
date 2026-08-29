import { useState } from "react";
import { useHeroes } from "./hooks/useHeroes";
import { usePagination } from "./hooks/usePagination";
import HeroCard from "./components/HeroCard";
import SearchBar from "./components/SearchBar";
import RoleFilter from "./components/RoleFilter";
import Pagination from "./components/Pagination";

function App() {
  const { heroes, loading, error } = useHeroes();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  const filteredHeroes = heroes.filter((hero) => {
    const matchesName = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRoles.length === 0 || selectedRoles.includes(hero.role);
    return matchesName && matchesRole;
  });

  const { paginatedItems, currentPage, totalPages, goToPage } =
    usePagination(filteredHeroes, 12);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  function handleSearch(term) {
    setSearchTerm(term);
    goToPage(1);
  }

  function handleRoleChange(roles) {
    setSelectedRoles(roles);
    goToPage(1);
  }

  return (
    <div className="p-6 min-h-screen bg-ow-dominant">
      <SearchBar onSearch={handleSearch} />
      <RoleFilter selectedRoles={selectedRoles} onChange={handleRoleChange} />

      {filteredHeroes.length === 0 ? (
        <p className="text-gray-400">Nenhum herói encontrado.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {paginatedItems.map((hero) => (
              <HeroCard
                key={hero.key}
                name={hero.name}
                portrait={hero.portrait}
                role={hero.role}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </>
      )}
    </div>
  );
}

export default App;