const NutritionBadge = ({ label, value, unit, icon }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <div className="text-2xl font-semibold text-gray-800">{value}</div>
        <div className="text-sm text-gray-500">
          {unit && <span>{unit} </span>}
          <span>{label}</span>
        </div>
      </div>
    );
  };
  
  export default NutritionBadge;
  