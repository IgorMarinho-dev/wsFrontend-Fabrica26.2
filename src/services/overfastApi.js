const BASE_URL = import.meta.env.VITE_API_URL;

export async function getHeroes() {
  const response = await fetch(`${BASE_URL}/heroes`);

  if (!response.ok) {
    throw new Error("Erro ao buscar heróis da API");
  }

  return response.json();
}