type ConvertedAmountProps = {
  sourceAmount: number | null;
  currency: string;
  exchangeRate: number | null;
};

const ConvertedAmount = ({
  sourceAmount,
  currency,
  exchangeRate,
}: ConvertedAmountProps) => {
  return (
    <div className="rounded-md bg-muted p-3 text-center border">
      <p className="text-sm text-muted-foreground">Converted amount</p>
      <p className="mt-1 text-xl font-bold">
        {sourceAmount !== null && exchangeRate !== null
          ? (sourceAmount * exchangeRate).toFixed(2)
          : "—"}{" "}
        {currency}
      </p>
    </div>
  );
};

export default ConvertedAmount;
