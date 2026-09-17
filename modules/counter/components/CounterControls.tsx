"use client";

import { Button } from "@/components/ui/button";
import { useCounterStore } from "../store/counter.store";

const CounterControls = () => {
  const { increment, decrement, reset } = useCounterStore();
  return (
    <div className="flex gap-5 mt-5">
      <Button onClick={increment} variant="outline">
        +1
      </Button>
      <Button onClick={decrement} variant="outline">
        -1
      </Button>
      <Button onClick={reset} variant="outline">
        Reset
      </Button>
    </div>
  );
};

export default CounterControls;
