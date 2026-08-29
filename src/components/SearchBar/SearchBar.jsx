import { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(inputValue.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Buscar herói por nome..."
        className="flex-1 px-4 py-2 rounded-lg bg-ow-secondary text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-ow-accent"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-ow-accent text-ow-dominant font-semibold rounded-lg hover:brightness-110 transition-all"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;