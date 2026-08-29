import { useState, useEffect } from "react";
import { getHeroes } from "../services/overfastApi";

export function useHeroes() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        setLoading(true);
        const data = await getHeroes();
        setHeroes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroes();
  }, []);

  return { heroes, loading, error };
}