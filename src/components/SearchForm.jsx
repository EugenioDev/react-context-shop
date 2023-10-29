import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

function SearchForm() {
  return (
    <>
      <form>
        <div className="rounded-sm flex flex-row overflow-hidden">
          <select className=" outline-none px-2">
            <option value="categorie">Tutte le categorie</option>
            <option value="gioelli">Gioielli</option>
            <option value="elettronica">Elettronica</option>
            <option value="vestiti-uomo">Vestiti Uomo</option>
            <option value="vestiti donna">Vestiti Donna</option>
          </select>
          <input type="text" className="text-gray-500 p-1 outline-none" placeholder="Cerca nello shop"/>
            <div className="p-2 bg-orange-400 cursor-pointer">
                <MagnifyingGlassIcon className="w-6 h-6"/>
            </div>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
