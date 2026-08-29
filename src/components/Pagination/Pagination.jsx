function Pagination({ currentPage, totalPages, goToPage }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6 px-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 rounded-lg transition-colors ${
            page === currentPage
              ? "bg-ow-accent text-ow-dominant font-semibold"
              : "bg-ow-secondary text-gray-300 hover:brightness-125"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;