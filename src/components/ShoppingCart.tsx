import { useShoppingCart } from "./useShoppingCart.tsx";
import ShoppingCartItem from "./ShoppingCartItem.tsx";

export default function ShoppingCart() {
  const { items, fullPrice } = useShoppingCart();

  return (
    <div className="min-h-4-6 p-6">
      <h1 className="text-2xl mb-6 col-span-full">Koszyk na zakupy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-0 md:grid-cols-1 lg:grid-cols-3 gap-2 col-span-full">
        {items.map((item, id) => {
          return (
            <ShoppingCartItem item={item} id={id} key={id}/>
          );
        })}
      </div>
      <div className="col-span-full mt-4">
        <h3 className="text-2xl">Cena do zapłacenia: {fullPrice}zł</h3>
        <button className={`py-4 px-6 w-52 h-20 rounded-xl text-2xl my-2 hover:shadow-2xl transition-all ${fullPrice === 0 ? "bg-slate-200 dark:bg-gray-400 hover:bg-slate-300 text-slate-600 cursor-default": "bg-indigo-300 dark:bg-indigo-800 dark:hover:bg-indigo-900 hover:bg-indigo-400"}`}>Zapłać</button>
      </div>
    </div>
  );
}