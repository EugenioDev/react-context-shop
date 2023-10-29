import React, { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext/StoreContext";

function Navbar() {
  const {products} = useContext(StoreContext)
  return (
    <>
      <header className="bg-gray-800 p-4 fixed top-0 w-full">
        <div className="flex flex-row items-center justify-between">
          <Link to='/' className="font-bold text-lg text-white">Context Shop</Link>
          <div>
            <SearchForm />
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative cursor-pointer flex items-center space-x-3 hover:underline">
              <Link  to="/cart" className="font-semibold text-white">Carrello</Link>
              <ShoppingBagIcon className="w-6 h-6 text-white" />
              <span className="bg-orange-500 absolute bottom-3 -right-1 w-4 h-4 text-center rounded-full text-xs">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
