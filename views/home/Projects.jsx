import React from "react";
import HeadingDivider from "../../components/base/HeadingDivider";
import ProjectCard from "../../components/reusable/project/ProjectCard";

function Projects() {
  const ALL_STATS = [
    {
      name: "Total",
      value: 0,
    },
    {
      name: "Total",
      value: 0,
    },
    {
      name: "Total",
      value: 0,
    },
  ];
  return (
    <div>
      <div className="container mx-auto my-28">
        <HeadingDivider />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_STATS.map((item) => {
            return <ProjectCard key={item.name} />;
          })}
        </dl>
      </div>
    </div>
  );
}

export default Projects;
