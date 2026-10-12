import { NextResponse } from "next/server";
import {
  getCurrencyRates,
  getSupportedCurrencies,
} from "@/modules/currencyConverter/services/currencyConverter.service";

export async function GET() {
  try {
    const [rates, currencies] = await Promise.all([
      getCurrencyRates(),
      getSupportedCurrencies(),
    ]);

    return NextResponse.json({
      ...rates,
      currencies,
    });
  } catch (error) {
    console.error("Failed to get currency data:", error);

    return NextResponse.json(
      { error: "Failed to fetch currency data" },
      { status: 500 },
    );
  }
}
