import Image from "next/image";
import Logo from "@/app/components/Logo"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ControlPanel from "./components/ControlPanel";
import CodigoDaFamilia from "./components/CodigoDaFamilia";
import SocialProof from "./components/SocialProof";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <ControlPanel />
    <CodigoDaFamilia />
    <SocialProof />
    <Footer />
  
    </>
  );
}
