import "./App.css";
import Footer from "./components/_globalcomponents/Footer";
import Navbar from "./components/_globalcomponents/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./routing/CustomRoutes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <CustomRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
