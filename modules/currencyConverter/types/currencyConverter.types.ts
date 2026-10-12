export type ExchangeRateApiResponse = {
  result: string;
  base_code: string;
  conversion_rates: Record<string, number>;
};

export type CurrencyRatesResponse = {
  baseCode: string;
  rates: Record<string, number>;
};

export type SupportedCurrenciesApiResponse = {
  result: string;
  supported_codes: [string, string][];
};

export type CurrencyOption = {
  code: string;
  name: string;
};
