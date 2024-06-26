import Header from "./components/Header.tsx";
import Images from "./components/Images.tsx";
import ItemShop from "./components/ItemShop.tsx";
import Footer from "./components/Footer.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import NoPage from "./components/NoPage.tsx";
import { ShoppingCartProvider } from "./components/useShoppingCart.tsx";

import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import imgs from "./images.ts";
import DarkModeToggler from "./components/DarkModeToggler.tsx";

export interface Category {
  name: string;
  tag: string;
  subcategories: string[];
}

export interface Image {
  src: string;
  tag: string;
}

interface Route {
  path: string;
  element: ReactNode;
  index?: boolean;
}

function App() {
  const categories: Category[] = [
    {
      name: "Mężczyzna",
      tag: "men",
      subcategories: [
        "T-Shirt",
        "Jeansy",
        "Spodnie",
        "Plaszcze",
        "Kurtki",
        "Marynarki",
      ],
    },
    {
      name: "Kobieta",
      tag: "woman",
      subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Sukienki", "Kurtki"],
    },
    {
      name: "Obuwie",
      tag: "shoe",
      subcategories: ["Nike", "Adidas", "Puma", "Vans", "New Balance"],
    },
    {
      name: "Sport",
      tag: "sport",
      subcategories: [
        "Koszulka",
        "Stroje kapielowe",
        "Pilki",
        "Szorty",
        "Skateboard",
      ],
    },
  ];

  const images = [
    {
      src: imgs[0],
      tag: "men",
    },
    {
      src: imgs[1],
      tag: "woman",
    },
    {
      src: imgs[2],
      tag: "shoe",
    },
    {
      src: imgs[3],
      tag: "sport",
    },
  ];

  return (
    <ShoppingCartProvider>
      <main className="h-full font-radio-canada-big flex-col center max-w-dvw overflow-x-hidden dark:bg-slate-600 dark:text-white transition-colors">
        <BrowserRouter>
          <Header title="Sklep" categories={categories}></Header>
          <Routes>
            <Route index path="/react-shop-app" element={<Images imgs={images} />} />
            <Route path="/react-shop-app/shopping-cart" element={<ShoppingCart />} />
            <Route path="/react-shop-app/item-shop" element={<ItemShop/>}></Route>
            <Route path="/react-shop-app/*" element={<NoPage />} />
          </Routes>
          <Footer></Footer>
          <DarkModeToggler/>
        </BrowserRouter>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
