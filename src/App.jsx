import { useState } from "react";
import { useHeroes } from "./hooks/useHeroes";
import { usePagination } from "./hooks/usePagination";
import HeroCard from "./components/HeroCard";
import SearchBar from "./components/SearchBar";

function App() {
  const { heroes, loading, error } = useHeroes();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { paginatedItems, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(filteredHeroes, 12);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  function handleSearch(term) {
    setSearchTerm(term);
    goToPage(1);
  }

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />

      <h1 className="text-2xl font-bold text-white mb-4">
        Página {currentPage} de {totalPages || 1}
      </h1>

      {filteredHeroes.length === 0 ? (
        <p className="text-gray-400">Nenhum herói encontrado.</p>
      ) : (
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
      )}

      <div className="flex gap-4 mt-6">
        <button onClick={prevPage} className="text-white underline">
          Anterior
        </button>
        <button onClick={nextPage} className="text-white underline">
          Próximo
        </button>
      </div>
    </div>
  );
}

export default App;