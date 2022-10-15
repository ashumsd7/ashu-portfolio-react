import React from "react";
import Footer from "../components/base/Footer";
import Hero from "../components/base/Hero";
import ProjectCard from "../components/reusable/project/ProjectCard.";
import StatInfo from "../components/reusable/stats/StatInfo";
import Projects from "../views/home/Projects";
import Stats from "../views/home/Stats";
import TimeLines from "../views/home/TimeLines";

function index() {
  return (
    <>
      <Hero />
      <StatInfo />
      <TimeLines />
      <Projects />
      <Footer/>
    </>
  );
}

export default index;
