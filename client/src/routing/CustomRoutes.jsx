import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/_globalcomponents/Navbar";
import Footer from "../components/_globalcomponents/Footer";
import Blog from "../components/_home/Blog";
import About from "../components/_home/About";
import ContactPage from "../pages/contact/ContactPage";
import Gallery from "../pages/gallery/Gallery";
import Tours from "../components/_home/Tours";
import TourPage from "../pages/tours/TourPage";
import Layout from "../layout/Layout";
import AboutPage from "../pages/about/AboutPage";
import DestinationPage from "../pages/destination/DestinationPage";
import Destination from "../components/_home/Destination";
import TourDetails from "../pages/tours/TourDetails";
import TourSearch from "../pages/tours/TourSearch";
import BlogPage from "../pages/blog/BlogPage";
import Loading_Skeleton from "../components/_globalcomponents/_skeleton/Loading_Skeleton";
import Auth from "../pages/contact/Auth";
const CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-page" element={<BlogPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/about-page" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/tourspage" element={<TourPage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour-details" element={<TourDetails />} />
          <Route path="/tours-page" element={<TourPage />} />
          <Route path="/tour-search" element={<TourSearch />} />

          <Route path="/destination" element={<Destination />} />
          <Route path="/destination-page" element={<DestinationPage />} />

          <Route path="/skeleton" element={<Loading_Skeleton />} />
        </Route>
      </Routes>
    </>
  );
};

export default CustomRoutes;
