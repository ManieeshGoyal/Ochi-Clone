import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Marquee from "./components/marquee";

export default function App() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white font-Montserrat ">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  );
}
