import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './index.css';
import leftArrowImage from "./assets/leftarrow.png"; // Import the left arrow image

function ProjectComponent(props) {
  return (
    <>


      <section className="flex flex-col md:flex-row justify-center gap-5 ml-10 mr-10 md:ml-20 md:mr-20">

        <div className="flex flex-col gap-3 pr-5 md:pr-40 pt-5 md:pt-20 w-full md:w-[50%]">

          <div className="relative">
            <h1 className="w-full text-stone-700 text-2xl md:text-[65px] font-black leading-[66px]" style={{ fontFamily: 'Overused Grotesk' }}>{props.title}</h1>

          </div>
          {/* Project Name and Description */}
          <h3 className="w-full text-stone-900 text-lg md:text-[30px] font-normal leading-[46px]" style={{ fontFamily: 'Overused Grotesk' }}>
            {props.projectname}
          </h3>
          <p className="w-full text-stone-900 text-lg md:text-[30px] font-normal leading-[46px]" style={{ fontFamily: 'Overused Grotesk' }}>{props.description}</p>

          <div className="flex gap-4 items-center"> {/* Wrap the "SEE WORK" link */}
            <a className="w-[140px] h-[30px] bg-black rounded-full border border-neutral-950 items-center justify-center inline-flex text-white text-sm md:text-base" href={props.link} style={{ fontFamily: 'Overused Grotesk' }}>SEE WORK</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 pt-5 md:pt-20 w-full md:w-[50%]"> {/* Adjusted spacing and width */}
          <img className="w-full md:max-w-[600px]" src={props.heroimg} alt="Project Hero Image" /> {/* Adjusted image width */}
          <div className="flex flex-wrap gap-2 mt-2 justify-end w-full"> {/* Wrap the buttons and adjust spacing */}
            <div className="rounded-lg p-2 text-sm md:text-base border border-gray-400" style={{ fontFamily: 'Overused Grotesk' }}>{props.btn1}</div> {/* Adjusted button size and font */}
            <div className="rounded-lg p-2 text-sm md:text-base border border-gray-400" style={{ fontFamily: 'Overused Grotesk' }}>{props.btn2}</div> {/* Adjusted button size and font */}
            <div className="rounded-lg p-2 text-sm md:text-base bg-secondarygreen border border-secondarygreen text-white" style={{ fontFamily: 'Overused Grotesk' }}>{props.btn3}</div> {/* Adjusted button size and font */}
          </div>
        </div>
      </section>

      <section className="process-section mr-10 flex flex-col pl-5 md:pl-20"> {/* Adjusted padding */}
        {props.processSteps && props.processSteps.map((step, index) => (
          <div key={index}>
            <br />
            <p className="w-full " style={{ fontFamily: 'Overused Grotesk' }}>{step.text}</p> <br />
            {step.image && (
              <img src={step.image} alt={`Step ${index}`} />
            )}
            {step.images && (
              <div className="image-container flex flex-wrap"> {/* Adjusted container */}
                {step.images.map((image, i) => (
                  <img key={i} src={image} alt={`Step ${index} Image ${i}`} className="w-full md:w-1/2" />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default ProjectComponent;
