import React from "react";

interface FilterComponentProps {
  title: string;
  options: string[] | { label: string; value: string }[];
  selectedOptions: string;
  onChange: (value: string) => void;
  filterType: "category" | "price";
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
  filterType,
}) => {
  const handleOptionChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="mb-4">
      <h5 className="font-semibold">{title}</h5>
      <div className="space-y-2">
        {options.map((option) => {
          // Handle both string and object formats
          const value = typeof option === "string" ? option : option.value;
          const label = typeof option === "string" ? option : option.label;

          return (
            <div key={value} className="flex items-center">
              <input
                type="radio"
                name={filterType}
                value={value}
                checked={selectedOptions === value}
                onChange={() => handleOptionChange(value)}
                id={value}
                className="mr-2"
              />
              <label htmlFor={value} className="text-sm">
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterComponent;
