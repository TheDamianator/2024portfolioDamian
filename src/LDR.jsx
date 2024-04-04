import React from "react";
import Projectcomponent from "./Projectcomponent";
import ldrheader from "./assets/ldrheader.png";
import BackNavigator from "./BackNavigator";

//images
import demoday from "./assets/projects/demoday.png";
import ldrscreen from "./assets/projects/ldrscreen.png";
import ldrscreen2 from "./assets/projects/ldrscreen2.png";
import ldrscreen3 from "./assets/projects/ldrscreen3.png";
import ldrend1 from "./assets/projects/ldrend1.png";
import ldrend2 from "./assets/projects/ldrend2.png";

export default function LDR() {
    const processSteps = [
        {
            text: (
                <>
                    <h2 className="font-bold text-3xl mb-4">The Concept</h2>
                    <img src={ldrscreen} alt="LDR Screen" className="w-3/4 md:w-2/5 rounded-lg mb-4" />
                    <p>
                        As a final project for my minor, I created an emotionally engaging website exploring the challenges and triumphs of long-distance relationships. The goal was to enhance understanding and belief in the complexities of love across geographical boundaries.
                    </p>
                    <p>
                        The website is designed as a storytelling game using A.I. to create a unique experience for each user. Users can make choices that affect the outcome of the story, with the A.I. adapting the narrative accordingly.
                    </p>
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Solution</h2>
                    <div className="flex flex-col md:flex-row mb-4">
                        <img src={ldrscreen2} alt="LDR Screen 2" className="w-full md:w-2/6 rounded-lg mr-0 md:mr-4 mb-4 md:mb-0" />
                        <img src={ldrscreen3} alt="LDR Screen 3" className="w-full md:w-2/6 rounded-lg ml-0 md:ml-4" />
                    </div>
                    <p>
                        This project delivers an immersive experience through captivating visuals and interactive storytelling. With Vue.js powering the backend, users can delve into a narrative where their decisions carry weight. It's a platform designed to empower individuals, fostering understanding and introspection on the nuances of long-distance love.
                    </p>
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Demo</h2>
                    <img src={demoday} alt="Demo Day" className="w-3/4 md:w-2/6 rounded-lg mb-4" />
                    <p>
                        During a showcase expo, 16 eager participants delved into the immersive experience I crafted, each navigating the digital journey of long-distance relationships. With a dedicated monitor set up for demonstration, teachers and students alike engaged with the interactive narrative, providing valuable feedback and insights.
                    </p>
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Conclusion</h2>
                    <div className="flex flex-col md:flex-row mb-4">
                        <img src={ldrend1} alt="LDR End 1" className="w-full md:w-2/6 rounded-lg mr-0 md:mr-4 mb-4 md:mb-0" />
                        <img src={ldrend2} alt="LDR End 2" className="w-full md:w-2/6 rounded-lg ml-0 md:ml-4" />
                    </div>
                    <p>
                        As teachers and students immersed themselves in the interactive narrative, their enjoyment and engagement underscored the project's success. Their enthusiastic participation not only validated the concept but also highlighted its potential to resonate with a broader audience. Through this collaborative exploration, the project emerged as a compelling tool for fostering understanding and empathy in the realm of long-distance relationships.
                    </p>
                    <p>
                        It was especially fun to see the different endings that each participant got, and how they reacted to the story. It was a great way to end the minor, and I'm proud of the result. Feel free to check out the design of the project on Figma using the button on top of the page!
                    </p>
                </>
            ),
        },
    ];

    return (
        <div>
            <BackNavigator />
            <Projectcomponent
                title="The LDR Project"
                projectname="Long Distance Relationship Game"
                description=" A.I Based storytelling game about a long distance relationship."
                link="https://www.figma.com/file/RTgZiJ5kGn5LDcdM6SrxEW/Personal-Project-S6?type=design&node-id=7%3A89&mode=design&t=Ve2MnZmW6v7vcgyq-1"
                heroimg={ldrheader}
                btn1="Design"
                btn2="A.I"
                btn3="Storytelling"
                processSteps={processSteps}
            />
        </div>
    );
}
