export type ExchangeRateApiResponse = {
  result: string;
  base_code: string;
  conversion_rates: Record<string, number>;
};

export type CurrencyRatesResponse = {
  baseCode: string;
  rates: Record<string, number>;
};
