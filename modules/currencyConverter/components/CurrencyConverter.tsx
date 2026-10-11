"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import CurrencySelect from "./CurrencySelect";

// Icons
import { CgArrowsExchange } from "react-icons/cg";
import CurrencyInput from "./CurrencyInput";
import ConvertedAmount from "./ConvertedAmount";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [amount, setAmount] = useState("100");

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Card className="mx-auto w-full max-w-md border">
      <CardHeader>
        <CardTitle>Currency Converter</CardTitle>
        <CardDescription>
          Convert currencies using exchange rates
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="">
          <CurrencyInput value={amount} onValueChange={setAmount} />
        </div>

        <div className="flex items-end gap-2">
          <div className="min-w-0 flex-1">
            <label className="text-sm font-medium">From:</label>
            <CurrencySelect
              currencies={["USD", "EUR", "UAH", "GBP", "PLN"]}
              value={fromCurrency}
              onValueChange={setFromCurrency}
            />
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={swapCurrencies}
            aria-label="Swap currencies"
          >
            <CgArrowsExchange className="size-5" />
          </Button>

          <div className="min-w-0 flex-1">
            <label className="text-sm font-medium">To:</label>
            <CurrencySelect
              currencies={["USD", "EUR", "UAH", "GBP", "PLN"]}
              value={toCurrency}
              onValueChange={setToCurrency}
            />
          </div>
        </div>

        <ConvertedAmount
          sourceAmount={amount === "" ? null : Number(amount)}
          currency={toCurrency}
          exchangeRate={null}
        />

        <Button className="w-full">Convert</Button>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
