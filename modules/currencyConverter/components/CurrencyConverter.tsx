"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../services/currencyConverter.client.service";
import type { CurrencyRatesResponse } from "../types/currencyConverter.types";
import CurrencySelect from "./CurrencySelect";

// Icons
import { CgArrowsExchange } from "react-icons/cg";
import CurrencyInput from "./CurrencyInput";
import ConvertedAmount from "./ConvertedAmount";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [amount, setAmount] = useState("100");

  const [currencyRates, setCurrencyRates] =
    useState<CurrencyRatesResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const data = await fetchCurrencyRates();
        setCurrencyRates(data);
      } catch {
        setError("Не вдалося завантажити список валют.");
      }
    };

    loadCurrencies();
  }, []);

  const exchangeRate =
    currencyRates?.rates[fromCurrency] && currencyRates?.rates[toCurrency]
      ? currencyRates.rates[toCurrency] / currencyRates.rates[fromCurrency]
      : null;

  const convertedAmount =
    amount.trim() !== "" &&
    Number.isFinite(Number(amount)) &&
    Number(amount) >= 0 &&
    exchangeRate !== null
      ? Number(amount) * exchangeRate
      : null;

  const currencies = currencyRates?.currencies ?? [];

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
              currencies={currencies}
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
              currencies={currencies}
              value={toCurrency}
              onValueChange={setToCurrency}
            />
          </div>
        </div>

        <ConvertedAmount amount={convertedAmount} currency={toCurrency} />

        {/* <Button className="w-full">Convert</Button> */}
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
