import { Input } from "@/components/ui/input";

type CurrencyInputProps = {
  value: string;
  onValueChange: (value: string) => void;
};

const CurrencyInput = ({ value, onValueChange }: CurrencyInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Amount:</label>
      <Input
        className="mt-1"
        type="number"
        min="0"
        step="any"
        placeholder="Enter amount"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
