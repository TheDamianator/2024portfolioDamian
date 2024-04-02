import React from "react";
import Projectcomponent from "./component/Projectcomponent";
import ldrheader from "./assets/ldrheader.png";
import BackNavigator from "./BackNavigator";

export default function LDR() {
    const processSteps = [
        {
            text: (
                <>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Concept
                    </span>
                    <br />

                    An interactive, emotionally engaging website exploring the challenges and triumphs of long-distance relationships through a user-driven narrative—to enhance understanding and belief in the complexities of love across geographical boundaries.
                    <br /> <br />
                    The website is designed to be a storytelling game that uses A.I. to create a unique experience for each user. The user will be able to make choices that will affect the outcome of the story, and the A.I. will adapt the story to the user's choices.
                    <br /> <br />
                    i still have to write this part.
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
                link="https://www.google.com"
                heroimg={ldrheader}
                btn1="Design"
                btn2="A.I"
                btn3="Storytelling"
                processSteps={processSteps}
            />
        </div>
    );
}
