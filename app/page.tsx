"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ajusta el tiempo de espera si es necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Loader loading={loading} />

      {/* Contenido principal con transición */}
      <div className={`flex-grow transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <Hero />
      </div>

      {/* Footer fuera del div con transición */}
      <Footer />
    </div>
  );
};

export default Page;