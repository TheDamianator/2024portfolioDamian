import React from "react";
import Projectcomponent from "./component/Projectcomponent";
import ldrheader from "./assets/ldrheader.png";
import BackNavigator from "./BackNavigator";

//images
import demoday from "./assets/projects/demoday.png";
import ldrscreen from "./assets/projects/ldrscreen.png";
import ldrscreen2 from "./assets/projects/ldrscreen2.png";
import ldrscreen3 from "./assets/projects/ldrscreen3.png";

export default function LDR() {
    const processSteps = [
        {
            text: (
                <>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Concept
                    </span>
                    <br />

                    
                    <img src={ldrscreen} alt="Kiosk" className="w-3/5" />
                    <br />

                    As a last project for my minor, I was tasked with creating an interactive personal project. 
                    <br /> <br />
                    My project concept involves being an emotionally engaging website exploring the challenges and triumphs of long-distance relationships. The goal was to enhance understanding and belief in the complexities of love across geographical boundaries.

                    <br /> <br />
                    The website is designed to be a storytelling game that uses A.I. to create a unique experience for each user. The user will be able to make choices that will affect the outcome of the story, and the A.I. will adapt the story to the user's choices.

                    <br /> <br />
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Solution
                    </span>
                    <br />

                    <div className="flex">
                        <div>
                            <img src={ldrscreen2} alt="Me" className="mr-2" />
                        </div>
                        <div>
                            <img src={ldrscreen3} alt="Team" className="ml-2" />
                        </div>
                    </div>
                    <br />

                    This project delivers an immersive experience through captivating visuals and interactive storytelling. With Vue.js powering the backend, users can delve into a narrative where their decisions carry weight. It's a platform designed to empower individuals, fostering understanding and introspection on the nuances of long-distance love.
                    <br />

                    <br /> <br />
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Demo 
                    </span>
                    <br />

                    <img src={demoday} alt="Kiosk" className="w-3/5" />
                    <br />
                    
                    During a showcase expo, 16 eager participants delved into the immersive experience I crafted, each navigating the digital journey of long-distance relationships. With a dedicated monitor set up for demonstration, teachers and students alike engaged with the interactive narrative, providing valuable feedback and insights.

                    <br /> <br />
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Conclusion
                    </span>
                    <br />
                    
                    As teachers and students immersed themselves in the interactive narrative, their enjoyment and engagement underscored the project's success. Their enthusiastic participation not only validated the concept but also highlighted its potential to resonate with a broader audience. Through this collaborative exploration, the project emerged as a compelling tool for fostering understanding and empathy in the realm of long-distance relationships.
                    <br />
                </>
            ),
        }
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
