import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useAPI} from "../hooks/useAPI.tsx";

interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    img: string;
    rating: {
      rate: number;
      count: number;
    }
}

interface Props {
  name: string;
  tag: string;
}

export default function DropdownMenu({ name, tag }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [ids, setIds] = useState<number[]>([]);
  const api = useAPI();

  useEffect(() => {
    api.get().then((products: Product[]) => {
      products
          .filter(product => product.category === name)
          .forEach(product => {
            setSubcategories((prev) => [...prev, product.title]);
            setIds((prev) => [...prev, product.id]);
          });
    });
      }, []);


  return (
    <div 
        className="flex-col justify-between"
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="text-xl px-2 my-1 hover:bg-indigo-300 transition-colors rounded-lg cursor-pointer">
        <Link to={`react-shop-app/item-shop?tag=${tag}`}>{name}</Link>
      </span>
      <div>
        {show && (
          <ul className="p-2 bg-indigo-50 absolute rounded-lg transition-opacity duration-300 ease-in-out">
            {
                subcategories.map((subcategory, id) => (
                    <Link to={`react-shop-app/item-shop/?tag=${tag}&subcategory=${subcategory}`} key={id}>
                      <li className="hover:bg-indigo-100 transition-colors rounded-lg p-2 w-full" key={id}>
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
