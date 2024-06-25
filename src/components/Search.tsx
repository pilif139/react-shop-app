import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Search() {
  const divRef = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  return (
      <div ref={divRef} className="flex items-center space-x-2 bg-indigo-300 hover:bg-indigo-400 hover:shadow-2xl p-4 py-5 rounded-full transition-all h-min">
        <input type="text" className="p-2 rounded-full focus:outline-none focus:placeholder-black transition-colors" placeholder="Szukaj produktów" value={search} onChange={(e)=>setSearch(e.target.value)}
         onFocus={()=>divRef.current?.classList.add('bg-indigo-400')} onBlur={()=>divRef.current?.classList.remove('bg-indigo-400')}
        />
        <button className="bg-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors p-2 px-4 rounded-full" onClick={()=>navigate(`/react-shop-app/item-shop?search=${search}`)}>Szukaj</button>
      </div>
  );
}