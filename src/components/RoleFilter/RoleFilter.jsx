const ROLES = ["tank", "damage", "support"];

function RoleFilter({ selectedRoles, onChange }) {
  function toggleRole(role) {
    if (selectedRoles.includes(role)) {
      onChange(selectedRoles.filter((r) => r !== role));
    } else {
      onChange([...selectedRoles, role]);
    }
  }

  return (
    <div className="flex gap-4 mb-6">
      {ROLES.map((role) => (
        <label
          key={role}
          className="flex items-center gap-2 text-white capitalize cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedRoles.includes(role)}
            onChange={() => toggleRole(role)}
            className="w-4 h-4 accent-ow-accent"
          />
          {role}
        </label>
      ))}
    </div>
  );
}

export default RoleFilter;