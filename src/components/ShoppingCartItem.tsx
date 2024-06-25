import { CartItem, useShoppingCart } from "../hooks/useShoppingCart.tsx";
import React from "react";

interface Props{
    item: CartItem;
    id: number;
}

export default function ShoppingCartItem({item, id} :Props) {
    const {removeItem, addItem} = useShoppingCart();

    const handleChangeQuantity = (item: CartItem,num:number, e :React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        if(item.quantity === 0 && num === -1) return;
        if(item.quantity>=0 && item.quantity<1000) {
            e.preventDefault();
            addItem({...item, quantity: num});
        }
      }

    return (
        <div
        key={id}
        className="min-w-full bg-slate-500 text-white p-4 rounded-xl flex flex-col md:flex-row justify-between items-center hover:shadow-2xl hover:bg-slate-600 transition-all max-h-48"
        >
            <div className="mx-2 p-2 rounded-lg bg-slate-700">{item.name} - {item.size}</div>
            <div className="flex items-center mx-2 p-2 rounded-lg bg-slate-700">
                Ilość: <span className="font-bold ml-1">{item.quantity}</span>
                <button
                    className="bg-red-300 px-3 py-1 text-2xl m-2 rounded-xl hover:bg-red-600 transition-colors"
                    onClick={(e)=>handleChangeQuantity(item, -1,e)}
                >-</button>
                <button
                    className="bg-blue-300 px-3 py-1 text-2xl m-2 rounded-xl hover:bg-blue-600 transition-colors"
                    onClick={(e)=>handleChangeQuantity(item, 1,e)}
                >+</button>
            </div>
            <div className="mx-2 p-2 rounded-lg bg-slate-700">{item.price*item.quantity}zł ({item.price}zł)</div>
            <button
                className="bg-red-500 p-3 rounded-xl hover:bg-red-600 transition-colors"
                onClick={() => removeItem(item.name, item.size)}
            >
                Usuń
            </button>
        </div>
  );
}
