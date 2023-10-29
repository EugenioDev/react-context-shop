import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

function Home() {
  return (
    <>
      <Navbar />
      <main className="p-2 max-w-4xl mx-auto mt-4 md:w-full">
        <Products />
      </main>
    </>
  );
}

export default Home;
