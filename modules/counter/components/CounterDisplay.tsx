"use client";

import { useCounterStore } from "../store/counter.store";

const CounterDisplay = () => {
  const { count } = useCounterStore();
  return <div className="mt-3 text-5xl font-bold">{count}</div>;
};

export default CounterDisplay;
