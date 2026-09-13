import { Suspense } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { Technology } from "./components/types/types";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const techDataPromise = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HeroSection></HeroSection>
        <Suspense fallback="Loading...">
          <Technologies stacks={techDataPromise()} />
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
