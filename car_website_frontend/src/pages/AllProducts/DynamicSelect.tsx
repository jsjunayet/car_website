
import { cn } from "../../lib/utils";
  
  export function DynamicSelect({
    className,
    options = [],
    value = [],
    placeholder = '', 
    previousCategory = '',
    label,
    required,
    ...rest
  }) {
    return (
      <div className={cn("w-full mt-1", className)}>
        {label && (
          <label className="flex items-center gap-1 mt-2 font-semibold">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <Select required={required} {...rest}>
          <SelectTrigger className={cn('capitalize h-[48px]', className)}>
            <SelectValue placeholder={previousCategory || placeholder || label} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option, idx) => (
                <SelectItem
                  className="capitalize"
                  key={typeof option === 'string' ? option : idx}
                  value={value[idx] || option} // Use value if available, otherwise option
                >
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }