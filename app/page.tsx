"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import { SessionProvider } from "next-auth/react";

const Page = () => {
  return (
    <SessionProvider>
      <div>
        <Header />
        <Loader />
        <Hero /> 
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default Page;
