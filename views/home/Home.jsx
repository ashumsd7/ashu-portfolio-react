import React from "react";
import Footer from "../../components/base/Footer";
import Hero from "../../components/base/Hero";
import Projects from "../../views/home/Projects";
import Stats from "./Stats";
import Blogs from "./Blogs";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Blogs />

      <Footer />
    </>
  );
}

export default Home;
