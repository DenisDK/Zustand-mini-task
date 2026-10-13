import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CurrencyOption } from "../types/currencyConverter.types";

type CurrencySelectProps = {
  currencies: CurrencyOption[];
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

      <SelectContent className="max-h-60" alignItemWithTrigger={false}>
        {currencies.map((currency) => (
          <SelectItem key={currency.code} value={currency.code}>
            {currency.code} — {currency.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CurrencySelect;
