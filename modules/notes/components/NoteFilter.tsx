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
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Filter notes" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          {filterItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default NoteFilter;
