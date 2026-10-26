// import { Counter } from "@/modules/counter";
// import { ShoppingCart } from "@/modules/shoppingCart";
// import { Wishlist } from "@/modules/wishlist";
// import { ToDo } from "@/modules/to-do";
// import { MultiStep } from "@/modules/multiStepForm";
// import { CurrencyConverter } from "@/modules/currencyConverter";

import { Notes } from "@/modules/notes";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
    <div className="flex min-h-screen flex-col flex-1 items-center justify-center bg-white font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-center bg-[#f8f8f8] px-16 py-32 text-gray-800">
        {/* <Counter /> */}
        {/* <ShoppingCart /> */}
        {/* <Wishlist /> */}
        {/* <ToDo /> */}
        {/* <MultiStep /> */}
        {/* <CurrencyConverter /> */}
        <Notes />
      </main>
    </div>
  );
}
