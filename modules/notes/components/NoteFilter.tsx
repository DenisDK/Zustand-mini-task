import { filterItems } from "../constants/noteCategory";
import type { NoteCategory } from "../types/notes.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type NoteFilterValue = "all" | "pinned" | NoteCategory;

type NoteFilterProps = {
  value: NoteFilterValue;
  onChange: (value: NoteFilterValue) => void;
};

const NoteFilter = ({ value, onChange }: NoteFilterProps) => {
  return (
    <Select
      value={value}
      onValueChange={(newValue) => {
        if (newValue !== null) {
          onChange(newValue);
        }
      }}
    >
      <SelectTrigger className="w-45 border border-[#c0c0c0] bg-[#ebebeb] text-gray-900 shadow-none hover:bg-[#e0e0e0]">
        <SelectValue placeholder="Filter notes" />
      </SelectTrigger>

      <SelectContent className="border border-gray-300 bg-[#f8f8f8] text-gray-900">
        <SelectGroup>
          <SelectLabel className="text-gray-800">Filters</SelectLabel>

          {filterItems.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="text-gray-800 focus:bg-[#e7e7e7] focus:text-gray-900! focus:**:text-gray-900!"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default NoteFilter;
