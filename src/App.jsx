import "./styles/index.css";
import "./styles/features.css";
import { Navbar } from "./components/navigate/Navbar";
import { Footer } from "./components/navigate/Footer";
import { CustomBanner } from "./components/banners/CustomBanner";
import { CustomNewSection } from "./components/sections/CustomNewSection";

const App = () => {
  return (
    <>
      <Navbar />
      <CustomBanner />
      <CustomNewSection />
      <Footer />
    </>
  );
};

export default App;
