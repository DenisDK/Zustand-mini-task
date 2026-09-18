import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

const Counter = () => {
  return (
    <div className="dark:bg-white/5 flex flex-col items-center justify-center w-85 h-full rounded p-5 border">
      <h2 className="text-2xl font-bold">Counter</h2>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
};

export default Counter;
