import DropdownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { useShoppingCart } from "./useShoppingCart";
import {Category} from '../App'
import Search from "./Search.tsx";

interface Props{
    title: string;
    categories: Category[];
}

function Header({title, categories}:Props) {
    const {fullPrice} = useShoppingCart();

    return (
        <header className="flex md:justify-between md:items-center items-center flex-col md:flex-row bg-indigo-100  w-full md:h-1/6 h-fit p-5 transition-colors hover:bg-indigo-200 sticky top-0">
          <div>
            <h1 className="flex w-min lg:p-2 lg:pl-0 lg:text-5xl md:text-4xl text-3xl ml-1 hover:bg-indigo-300 transition-colors rounded-xl cursor-pointer">
              <Link to='/react-shop-app/'>
                {title}
              </Link>
            </h1>
            <nav className="flex">
              {categories.map((category, id) => <DropdownMenu key={id} name={category.name} tag={category.tag} subcategories={category.subcategories}></DropdownMenu>)}
            </nav>
          </div>
          <Search/>
          <Link to="/react-shop-app/shopping-cart"
                className="flex items-center space-x-2 bg-indigo-300 hover:bg-indigo-400 hover:shadow-2xl p-4 rounded-full transition-all h-min py-4 w-fit">
            <p className="text-lg font-semibold">{fullPrice === 0 ? "Koszyk pusty" : fullPrice + "zł"}</p>
            <CiShoppingBasket className="text-5xl"/>
          </Link>
        </header>
    )
}

export default Header