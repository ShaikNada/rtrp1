const MealTypeSelector = ({ types, selectedType, onChange }) => {
    return (
      <div className="flex gap-3 mt-6 mb-8 overflow-x-auto pb-2 no-scrollbar">
        {types.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedType === type
                ? 'bg-primary text-primary-foreground font-semibold shadow-[0_0_10px_rgba(234,56,76,0.6)]'
                : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:shadow-[0_0_8px_rgba(234,56,76,0.4)]'
            }`}
            onClick={() => onChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  };
  
  export default MealTypeSelector;
  