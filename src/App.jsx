import { useState } from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";

export default function App() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white font-Montserrat ">
      <Navbar />
      <LandingPage />
    </div>
  );
}
