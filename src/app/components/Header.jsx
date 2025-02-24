"use client"
import React,{useState,useEffect} from "react";
import { useRouter } from "next/navigation";

function Header() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/dragonballsearch/${search}`);
    }
  return (
    <header className="bg-blue-600 h-[250px] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Dragoball Z
        </h1>
        <p className="text-xl text-yellow-300 font-bold mt-2">Your Search favourite Dragonball Characters</p>
        <form className="flex mt-2" onSubmit={handleSearch}>
          <input
            type="text"
            className="w-full rounded-md border border-yellow-300 py-2 px-3 text-orange-600 shadow-md"
            placeholder="Search your characters..."
            onChange={handleChange}
          />
          <button className="py-2 px-3 text-white bg-orange-700 shadow-md ms-2 rounded-md" type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
