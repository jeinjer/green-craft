"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ajusta el tiempo de espera si es necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-50 transition-opacity duration-1000 opacity-100">
          <Image
            src="/loader/loader.gif"
            alt="Loading..."
            width={100}
            height={100}
            unoptimized
          />
        </div>
      )}
    </div>
  );
};

export default Loader;
