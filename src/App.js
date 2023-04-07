import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Initiative from "./components/Initiative";
import Features from "./components/Features";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Features />
      <Initiative />
      <Sponsors />
    </>
  );
}

export default App;
