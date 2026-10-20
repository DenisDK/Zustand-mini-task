import { Input } from "@/components/ui/input";

type NoteSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const NoteSearch = ({ value, onChange }: NoteSearchProps) => {
  return (
    <Input
      type="text"
      placeholder="Search notes..."
      className="w-full px-3 py-2 mt-5"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default NoteSearch;
