import React from "react";

interface FilterComponentProps {
  title: string;
  options: string[] | { label: string, value: string }[];
  selectedOptions: string[];
  onChange: (option: string) => void;
  filterType: 'category' | 'price';
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
  filterType,
}) => {
  const handleOptionChange = (option: string) => {
    onChange(option);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4
          className={`mb-2 ${filterType === 'price' ? 'mt-2' : 'mt-0'} text-lg font-extrabold`}
        >
          {title}
        </h4>
      </div>
      {options.map((option) => (
        <label key={filterType === 'price' ? option.label : option} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={() => handleOptionChange(filterType === 'price' ? option.label : option)}
            checked={selectedOptions.includes(filterType === 'price' ? option.label : option)}
          />
          <h6>{filterType === 'price' ? option.label : option}</h6>
        </label>
      ))}
      <hr className="w-full h-[2px] bg-primary" />
    </div>
  );
};

export default FilterComponent;
