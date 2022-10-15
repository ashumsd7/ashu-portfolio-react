import React from "react";
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
    </>
  );
}

export default index;
