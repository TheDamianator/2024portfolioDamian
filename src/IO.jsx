import React from "react";
import Projectcomponent from "./Projectcomponent";
import ioheader from "./assets/projects/Internship_Impression.png";
import BackNavigator from "./BackNavigator";

// Images
import SurveyDesign from "./assets/projects/survey.png";
import AdminView from "./assets/projects/createSurvey.png";
import UserSurvey from "./assets/projects/SurveyIntro.png";
import UserSurvey2 from "./assets/projects/SurveyFront.png";
import UserSurvey3 from "./assets/projects/SurveyEnd.png";

export default function IOInternship() {
  const processSteps = [
    {
      text: (
        <>
          <span className="font-bold text-lg md:text-xl">The Challenge</span>
          <br />
          My graduation internship at iO Digital Agency focused on creating a customer satisfaction tool using ReactJS
          and Material-UI (MUI). This tool was designed to align with iO's 'Experience is Everything' philosophy by
          measuring user satisfaction and providing actionable insights for improving current and future projects.
          <br />
          <br />
          The development process involved extensive UX research, ideation, and prototyping. User testing and validation
          were conducted to ensure the tool met usability standards and delivered a seamless experience across devices.
          <br />
          <br />
          <span className="font-bold text-lg md:text-xl">Survey Design</span>
          <br />
          <img src={SurveyDesign} alt="Survey Design" className="w-full md:w-2/5 rounded-lg" />
          <br />
          The surveys were designed to be highly interactive and engaging, incorporating smooth animations and
          user-friendly elements powered by ReactJS and MUI components. Accessibility and mobile usability were
          prioritized, with Fitts's Law guiding the placement of interactive elements to enhance user experience.
          <br />
          <br />
          <span className="font-bold text-lg md:text-xl">The Admin Dashboard</span>
          <br />
          <img src={AdminView} alt="Admin Dashboard" className="w-full md:w-2/5 rounded-lg" />
          <br />
          The admin interface was developed to manage and create customers, users, and projects efficiently. It also
          enabled admins to send out surveys, track survey responses, and analyze real-time results. The dashboard's
          design focused on simplicity and functionality, offering a modern, intuitive interface built with ReactJS and
          styled using MUI. Seamless integration with iO's existing systems ensured that the tool could scale for future
          use cases.
          <br />
          <br />
          <span className="font-bold text-lg md:text-xl">The Results</span>
          <br />
          <div className="flex gap-10">
            <img src={UserSurvey} alt="Survey Results" className="w-2/3 md:w-1/5 rounded-lg" />
            <img src={UserSurvey2} alt="Survey Results" className="w-2/3 md:w-1/5 rounded-lg" />
            <img src={UserSurvey3} alt="Survey Results" className="w-2/3 md:w-1/5 rounded-lg" />
          </div>
          <br />
          User feedback was instrumental in refining the tool, which concluded with a functional prototype that received
          positive feedback from stakeholders. The customer satisfaction tool showcased how well-designed user feedback
          systems could drive impactful improvements in projects.
          <br />
          <br />
          <span className="font-bold text-lg md:text-xl">Reflection</span>
          <br />
          This internship allowed me to enhance my skills in UX research, frontend development with ReactJS and MUI, and
          stakeholder communication. It was a rewarding experience, resulting in a thesis and a product that exemplified
          iO's commitment to delivering exceptional experiences.
        </>
      ),
    },
  ];

  return (
    <div>
      <BackNavigator />
      <Projectcomponent
        title="iO Digital Agency Internship"
        projectname="Customer Satisfaction Tool"
        description="Graduation project for Fontys University of Applied Sciences, focusing on creating a customer satisfaction tool for iO Digital Agency."
        heroimg={ioheader}
        btn1="Design"
        btn2="Development"
        btn3="iO Digital Agency"
        processSteps={processSteps}
      />
    </div>
  );
}
