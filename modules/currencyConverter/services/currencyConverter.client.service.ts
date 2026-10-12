import type { CurrencyRatesResponse } from "../types/currencyConverter.types";

export async function fetchCurrencyRates(): Promise<CurrencyRatesResponse> {
  const response = await fetch("/api/currencies");

  if (!response.ok) {
    throw new Error("Failed to load currency rates");
  }

  return response.json();
}
