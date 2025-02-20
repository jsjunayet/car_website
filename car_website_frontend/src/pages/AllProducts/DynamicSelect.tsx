import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { cn } from "../../lib/utils";



interface DynamicSelectProps {
  className?: string;
  options: string[]; // Ensure options are objects with label and value
  value?: string; // Selected value
  placeholder?: string;
  previousCategory?: string;
  label?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

export function DynamicSelect({
  className,
  options = [],
  placeholder = "",
  previousCategory = "",
  label,
  required,
  onChange,
  ...rest
}: DynamicSelectProps) {
  return (
    <div className={cn("w-full mt-1", className)}>
      {label && (
        <label className="flex items-center gap-1 mt-2 font-semibold">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select required={required} onValueChange={onChange} {...rest}>
        <SelectTrigger className={cn("capitalize h-[48px]", className)}>
          <SelectValue placeholder={previousCategory || placeholder || label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem className="capitalize" key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
