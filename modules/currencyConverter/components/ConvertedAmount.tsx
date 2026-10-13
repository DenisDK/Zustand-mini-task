type ConvertedAmountProps = {
  amount: number | null;
  currency: string;
};

const ConvertedAmount = ({ amount, currency }: ConvertedAmountProps) => {
  return (
    <div className="rounded-md bg-muted p-3 text-center border">
      <p className="text-sm text-muted-foreground">Converted amount</p>

      <p className="mt-1 text-xl font-bold">
        {amount !== null ? amount.toFixed(2) : "—"} {currency}
      </p>
    </div>
  );
};

export default ConvertedAmount;
