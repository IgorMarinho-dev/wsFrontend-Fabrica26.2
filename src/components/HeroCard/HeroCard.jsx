function HeroCard({ name, portrait, role }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
      <img
        src={portrait}
        alt={name}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <span className="text-gray-400 text-sm capitalize">{role}</span>
      </div>
    </div>
  );
}

export default HeroCard;