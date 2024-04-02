import React from "react";
import '../index.css';

function ProjectComponent(props) {
  return (
    <>
    <section className="flex justify-center gap-52 ml-20">
      <div className="flex flex-col gap-7 pr-40  pt-20">
        <h1 className="w-[563px] text-stone-700 text-[65px] font-black font-['Overused Grotesk'] leading-[66px]">{props.title}</h1>
        <h3 className="w-[540px] text-stone-900 text-[30px] font-normal font-['Overused Grotesk'] leading-[46px]">
          {props.projectname} 
        </h3>
        <p className="w-[540px] text-stone-900 text-[30px] font-normal font-['Overused Grotesk'] leading-[46px]">{props.description}</p>

        <div className="flex gap-4 items-center"> {/* Wrap the "SEE WORK" link */}
          <a className="w-[140px] h-[30px] bg-black rounded-full border border-neutral-950 items-center justify-center inline-flex text-white" href={props.link}>SEE WORK</a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 pt-20"> {/* Wrap the image and buttons */}
        <img className="w-2/3" src={props.heroimg} alt="Project Hero Image" />
        <div className="flex space-x-2 mt-2 justify-end"> {/* New container for the buttons */}
          <div className="rounded-lg p-1 text-xs border border-gray-400">{props.btn1}</div>
          <div className="rounded-lg p-1 text-xs border border-gray-400">{props.btn2}</div>
          <div className="rounded-lg p-1 text-xs bg-secondarygreen border border-secondarygreen text-white">{props.btn3}</div>
        </div>
      </div>
    </section>
  

    <section >
        <div className="process-section flex flex-col pl-20">

          {props.processSteps && props.processSteps.map((step, index) => (
            <div key={index}>
              <br />
              <p className="w-1/2">{step.text}</p> <br />
              {step.image && (
               <img src={step.image} alt={`Step ${index}`} />

              )}
              {step.images && (
                <div className="image-container">
                  {step.images.map((image, i) => (
                 <img key={i} src={image} alt={`Step ${index} Image ${i}`} />

                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>










    </>
  );
}

export default ProjectComponent;
