import "server-only";

import type {
  ExchangeRateApiResponse,
  ExchangeRates,
  SupportedCurrenciesApiResponse,
  CurrencyOption,
} from "../types/currencyConverter.types";

export async function getCurrencyRates(
  baseCurrency: string = "USD",
): Promise<ExchangeRates> {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;

  if (!apiKey) {
    throw new Error("ExchangeRate-API key is not configured");
  }

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    const errorDetails = await response.text();

    console.error("ExchangeRate-API error:", {
      status: response.status,
      details: errorDetails,
    });

    throw new Error(
      `ExchangeRate-API request failed with status ${response.status}`,
    );
  }

  const data: ExchangeRateApiResponse = await response.json();

  if (data.result !== "success") {
    throw new Error("ExchangeRate-API returned an error");
  }

  return {
    baseCode: data.base_code,
    rates: data.conversion_rates,
  };
}

export async function getSupportedCurrencies(): Promise<CurrencyOption[]> {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;

  if (!apiKey) {
    throw new Error("ExchangeRate-API key is not configured");
  }

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/codes`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(
      `ExchangeRate-API request failed with status ${response.status}`,
    );
  }

  const data: SupportedCurrenciesApiResponse = await response.json();

  if (data.result !== "success") {
    throw new Error("ExchangeRate-API returned an error");
  }

  return data.supported_codes.map(([code, name]) => ({
    code,
    name,
  }));
}
