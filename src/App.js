import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Initiative from "./components/Initiative";
import ContactInfo from "./components/ContactInfo";
import Features from "./components/Features";
import Sponsors from "./components/Sponsors";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Features />
      <Initiative />
      <Sponsors />
      <Integrations />
      <ContactUs />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
