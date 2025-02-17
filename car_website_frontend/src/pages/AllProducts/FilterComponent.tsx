import React from "react";

interface Option {
  label: string;
  value: string;
}

interface FilterComponentProps {
  title: string;
  options: string[] | Option[]; // এখন এটি অবজেক্ট ও হতে পারে
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
      {options.map((option) => {
  const value = typeof option === "string" ? option : option.value;
  const label = typeof option === "string" ? option : option.label;

  return (
    <div key={value} className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={selectedOptions.includes(value)}
        onChange={() => handleOptionChange(value)}
      />
      <label>{label}</label>
    </div>
  );
})}

    </div>
  );
};

export default FilterComponent;
