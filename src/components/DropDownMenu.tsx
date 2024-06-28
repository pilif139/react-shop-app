import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  tag: string;
  subcategories: string[];
}

export default function DropdownMenu({ name,tag, subcategories }: Props) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div 
        className="flex-col justify-between"
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="text-xl px-2 my-1 hover:bg-indigo-300 dark:hover:bg-slate-500 transition-colors rounded-lg cursor-pointer">
        <Link to={`react-shop-app/item-shop?tag=${tag}`}>{name}</Link>
      </span>
      <div>
        {show && (
          <ul className="p-2 bg-indigo-50 dark:bg-slate-600 absolute rounded-lg transition-opacity duration-300 ease-in-out">
            {
                subcategories.map((subcategory, id) => (
                    <Link to={`react-shop-app/item-shop/?tag=${tag}&subcategory=${subcategory}`} key={id}>
                      <li className="hover:bg-indigo-100 dark:hover:bg-slate-400 transition-colors rounded-lg p-2 w-full" key={id}>
                      {subcategory}
                      </li>
                    </Link>
                ))
            }
          </ul>
        )}
      </div>
    </div>
  );
}
