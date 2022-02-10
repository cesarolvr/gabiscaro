import React from "react";
import { Router } from "@reach/router";

import Blueberry from "@components/Blueberry";
import Header from "@components/Header";

import useScroll from "@hooks/useScroll";

const Projects = () => {
  useScroll();
  return (
    <div className="scroll-content">
      <Header />
      <Router basepath="/projects">
        <Blueberry path="/blueberry" />
      </Router>
    </div>
  );
};
export default Projects;
