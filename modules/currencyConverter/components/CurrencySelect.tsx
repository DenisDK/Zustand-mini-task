import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CurrencySelectProps = {
  currencies: string[];
  value: string;
  onValueChange: (value: string) => void;
};

const CurrencySelect = ({
  currencies,
  value,
  onValueChange,
}: CurrencySelectProps) => {
  return (
    <Select
      value={value}
      onValueChange={(newValue) => {
        if (newValue !== null) {
          onValueChange(newValue);
        }
      }}
    >
      <SelectTrigger className="w-full mt-1">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>

      <SelectContent>
        {currencies.map((currency) => (
          <SelectItem key={currency} value={currency}>
            {currency}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CurrencySelect;
