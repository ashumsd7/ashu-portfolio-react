import React from "react";
import Footer from "../../components/base/Footer";
import HeadingDivider from "../../components/base/HeadingDivider";
import Hero from "../../components/base/Hero";
// import StatInfo from "../../components/base/StatInfo";
import Projects from "../../views/home/Projects";
import Stats from "./Stats";
import TimeLines from "../../views/home/TimeLines";
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
