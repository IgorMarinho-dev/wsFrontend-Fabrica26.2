import { useHeroes } from "./hooks/useHeroes";

function App() {
  const { heroes, loading, error } = useHeroes();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">
        {heroes.length} heróis carregados
      </h1>
    </div>
  );
}

export default App;