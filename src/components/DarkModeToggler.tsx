import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import {useEffect, useState} from "react";

function DarkModeToggler() {
  const [theme, setTheme] = useState<string>(localStorage.theme);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.theme = theme;
  },[theme])

  return (
    <button className="transition-colors dark:bg-gray-900 bg-indigo-500 text-white p-5 rounded-3xl absolute bottom-7 right-7 scale-[1.12]"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon/>}
    </button>
  );
}

export default DarkModeToggler;