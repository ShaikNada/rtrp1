import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DietSelector = ({ selectedDiet, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-1 transition-all"
      >
        <span className="font-bold text-foreground">{selectedDiet.name}</span>
        <ChevronDown size={16} className="text-foreground/70" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-10 glass rounded-lg py-2 min-w-[180px] animate-fade-in">
          {options.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left px-4 py-2 transition-all hover:bg-white/10 ${
                selectedDiet.id === option.id ? 'text-accent' : 'text-foreground/80'
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DietSelector;
