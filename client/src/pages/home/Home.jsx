import React from "react";
import About from "../../components/_home/About";
import Blog from "../../components/_home/Blog";
import Tours from "../../components/_home/Tours";
import Numbers from "../../components/_home/Numbers";
import Destination from "../../components/_home/Destination";
import Navbar from "../../components/_globalcomponents/Navbar";
import Footer from "../../components/_globalcomponents/Footer";
// import Tourvideo from "../../components/_home/Tourvideo";
// import Tourcountries from "../../components/_home/Tourcountries";
// import Testimonials from "../../components/_home/Testimonials";

const Home = () => {
  return (
    <>
      <About />
      <Tours />
      <Numbers />
      <Destination />

      <Blog />
    </>
  );
};

export default Home;
