import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Search() {
  const divRef = useRef<HTMLFormElement>(null)
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(search !== '') {
      navigate(`/react-shop-app/item-shop?search=${search}`)
    }
  }

  return (
      <form onSubmit={(e)=>handleSearch(e)} className="flex items-center space-x-2 bg-indigo-300 dark:bg-slate-600 hover:bg-indigo-400 dark:hover:bg-slate-700 hover:shadow-2xl p-4 py-5 rounded-full transition-all h-min m-5 md:m-0 w-min">
        <input type="text" className="p-2 rounded-full focus:outline-none focus:placeholder-black transition-colors dark:text-black" placeholder="Szukaj produktów" value={search} onChange={(e)=>setSearch(e.target.value)}
         onFocus={()=>divRef.current?.classList.add('bg-indigo-400 dark:bg-slate-800')} onBlur={()=>divRef.current?.classList.remove('bg-indigo-400 dark:bg-slate-800')}
        />
        <button className="bg-indigo-400 dark:bg-slate-500 hover:bg-indigo-500 dark:hover:bg-slate-600 hover:text-white transition-colors p-2 px-4 rounded-full" type="submit">Szukaj</button>
      </form>
  );
}