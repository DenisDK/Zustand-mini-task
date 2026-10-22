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

export const filterItems = [
  { label: "All", value: "all" },
  { label: "Pinned", value: "pinned" },
  { label: "Work", value: "work" },
  { label: "Study", value: "study" },
  { label: "Personal", value: "personal" },
  { label: "Ideas", value: "ideas" },
  { label: "Tasks", value: "tasks" },
];

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
