import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProject";
import React from "react";

const Projects = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col pb-4 pt-24 overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <RecentProjects />
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
