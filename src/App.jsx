import { useHeroes } from "./hooks/useHeroes";
import { usePagination } from "./hooks/usePagination";

function App() {
  const { heroes, loading, error } = useHeroes();
  const { paginatedItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination(heroes, 12);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">
        Página {currentPage} de {totalPages}
      </h1>
      <ul>
        {paginatedItems.map((hero) => (
          <li key={hero.key}>{hero.name}</li>
        ))}
      </ul>
      <button onClick={prevPage}>Anterior</button>
      <button onClick={nextPage}>Próximo</button>
    </div>
  );
}

export default App;