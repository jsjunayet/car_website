import React from "react";

interface FilterComponentProps {
  title: string;
  options: string[] | { label: string; value: string }[];
  selectedOptions: string;  // Change from array to a single string for category or price
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
    onChange(value);  // Pass selected option value to onChange handler
  };

  return (
    <div className="mb-4">
      <h5 className="font-semibold">{title}</h5>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={filterType === "category" ? option.value : option} className="flex items-center">
            <input
              type="radio"
              name={filterType}
              value={filterType === "category" ? option.value : option}
              checked={selectedOptions === (filterType === "category" ? option.value : option)}
              onChange={() => handleOptionChange(filterType === "category" ? option.value : option)}
              id={filterType === "category" ? option.value : option}
              className="mr-2"
            />
            <label
              htmlFor={filterType === "category" ? option.value : option}
              className="text-sm"
            >
              {filterType === "category" ? option.label : option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
