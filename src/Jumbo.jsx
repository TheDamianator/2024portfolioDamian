import React from "react";
import Projectcomponent from "./component/Projectcomponent";
import jumboheader from "./assets/jumboheader.png"
import BackNavigator from "./BackNavigator";

// Images

import JumboKiosk from "./assets/projects/jumboKiosk.png"
import JumboApp from "./assets/projects/jumboapp.png"
import Applayout from "./assets/projects/applayout.png"
import Kiosklayout from "./assets/projects/kiosklayout.png"
import Me from "./assets/projects/me.png"
import Team from "./assets/projects/team.png"

export default function Jumbo() {
    const processSteps = [
        {
            text: (
                <>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Situation
                    </span>



                    <br></br>
                    The context of this Project was very clear, we had to work together with Jumbo to imagine and design a way for customers to know what to eat and most importantly, it had to be personal for that customer. there would an AI that would take their previously bought items into account, as well as their estimated diet and food preferences.
                    <br /> <br />
                    This program would then show the user a big list of recipes and categories to choose from. the user can still choose to see recipes from specific categories and even refine the options by selecting various filters like spicy, quick and american.

                    <br />

                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Kiosk
                    </span>
                    <br />

                    <img src={JumboKiosk} alt="Kiosk" className="w-3/5" />
                    <br />

                    I found that using a kiosk is a good way for users to interact with our project idea, so I wanted to test it out. I decided to work on a kiosk idea and drew a sketch based on designs used by big companies today.
                    <br /><br />
                    This Kiosk creates a more personalized experience. The user can then browse and review their selected recipes, as well as choose categories and apply filters. Finally, the user can review their choice and either print out the recipe or send it to their Jumbo App.

                    <br /><br />
                    <img src={Kiosklayout} alt="Kiosk layout" />
                    <br />


                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The App
                    </span>
                    <br />

                    <img src={JumboApp} alt="Kiosk" className="w-3/5" />
                    <br />

                    I was given the task of creating an app right from the beginning. Luckily, I had already come up with a feature for it during the hackathon. After some thorough discussions, I decided to include this design in our project. However, it quickly became clear that certain changes were needed to turn it into a polished demo-ready product.
                    <br /><br />
                    These changes included adding categories and a search bar, making sure the swiping functionality for the categories was smooth, and carefully aligning every element with our column grid. Throughout this process, I improved my skills in Figma, as I made an app that closely resembles the functionality of the Jumbo app. It's all coded using React!

                    <br /><br />
                    <img src={Applayout} alt="App layout" />
                    <br />



                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Conclusion
                    </span>
                    <br />

                    The project proved to have been a great success, resulting in our team receiving the award for the most innovative project during the Fontys Innovation Insight Awards. Both my stakeholders and my teachers were especially excited about the project.
                    <br /><br />
                    <div className="flex">
                        <div>
                            <img src={Me} alt="Me" className="mr-2" />
                        </div>
                        <div>
                            <img src={Team} alt="Team" className="ml-2" />
                        </div>
                    </div>

                </>

            ),
        }
    ]
    return (
        <div>
            <BackNavigator />
            <Projectcomponent
                title="Jumbo"
                projectname="Whats for dinner?"
                description="A.I based recipes tailor made for you"
                link="https://www.google.com"
                heroimg={jumboheader}
                btn1="Design"
                btn2="Development"
                btn3="Jumbo"
                processSteps={processSteps}

            />
        </div>
    );
}
