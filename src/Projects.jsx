import React, { useState } from "react";

import Jumbo from "./assets/projects/Jumbo.png";
import Boxplosive from "./assets/projects/Boxplosive.png";
import LDR from "./assets/projects/LDR.png";

import { Fade } from "react-awesome-reveal";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { 
      title: "Jumbo", 
      image: Jumbo, 
      url: "/Jumbo", 
      description: "A collaboration with Jumbo JTC that creates A.I based recipes tailor made for you",
      btn1: "Design",
      btn2: "Development",
      btn3: "Jumbo"
    },
    { 
      title: "Boxplosive", 
      image: Boxplosive, 
      url: "/Boxplosive", 
      description: "Internship focused on exploring the use of NFTs in loyalty programs." ,
      btn1: "Design",
      btn2: "Development",
      btn3: "Boxplosive"
    },
    { 
      title: "The LDR Project", 
      image: LDR, 
      url: "/LDR", 
      description: "A.I Based story telling game that goes through the hardships that make a long distance relationship work." ,
      btn1: "Design",
      btn2: "A.I",
      btn3: "Storytelling"
    },
  ];

  return (
    <div id="projects" className="bg-primarywhite min-h-screen font-custom font-bold flex flex-col justify-center items-center relative">
      <Fade fraction={0.1}>
        <h1 className="text-6xl p-5 text-accentbrown mb-8">PROJECTS</h1>
      </Fade>
      
      <div className="grid pb-10 gap-4 mx-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Fade key={index} triggerOnce direction="up">
            <div 
              className="flex drop-shadow-2xl flex-col items-center my-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <a href={project.url}>
                <div className="flex flex-col items-center w-full max-w-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="text-left mt-4">
                    <h2 className="text-xl text-accentbrown mb-2">{project.title}</h2>
                    <p className="text-m text-accentbrown mb-2">{project.description}</p>
                    <div className="flex space-x-2 mt-2">
                      <div className="rounded-lg p-1 text-xs border border-gray-400">{project.btn1}</div>
                      <div className="rounded-lg p-1 text-xs border border-gray-400">{project.btn2}</div>
                      <div className="rounded-lg p-1 text-xs text-lightertext bg-secondarygreen border border-secondarygreen">{project.btn3}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
