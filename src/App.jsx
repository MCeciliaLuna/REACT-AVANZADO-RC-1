import "./styles/index.css";
import "./styles/features.css";
import { Navbar } from "./components/navigate/Navbar";
import { Footer } from "./components/navigate/Footer";
import { CustomBanner } from "./components/banners/CustomBanner";
import { CustomNewSection } from "./components/sections/CustomNewSection";
import { useState } from "react";

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  const loginOnClick = () => {
    setIsLogged(!isLogged)
  }

  return (
    <>
      <Navbar loggedOnCLick={loginOnClick} />
      <CustomBanner />
      <CustomNewSection isLogged={isLogged} />
      <Footer />
    </>
  );
};

export default App;
