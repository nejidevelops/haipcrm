import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Initiative from "./components/Initiative";
import ContactInfo from "./components/ContactInfo";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Features />
      <Initiative />
      <Integrations />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
