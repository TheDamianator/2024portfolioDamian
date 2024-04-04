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
                    <span className="font-bold text-lg md:text-xl">
                        The Situation
                    </span>
                    <br />
                    A month before this project started, I was invited to participate in a hackathon hosted by Jumbo JTC. The goal of the hackathon was to come up with a new innovative idea that would help Jumbo JTC in their daily business, in less than 24 hours. The hackathon was a great success, awarding our group with the "golden ticket," which progressed us to the finals, and I was asked to continue it for the duration of my minor.
                    <br /><br />
                    The context of this project was very clear: we had to work together with Jumbo to imagine and design a way for customers to know what to eat, and most importantly, it had to be personal for that customer. There would be an AI that would take their previously bought items into account, as well as their estimated diet and food preferences.
                    <br /><br />
                    This program would then show the user a big list of recipes and categories to choose from. The user can still choose to see recipes from specific categories and even refine the options by selecting various filters like spicy, quick, and American.

                    <br /><br />
                    <span className="font-bold text-lg md:text-xl">
                        The Kiosk
                    </span>
                    <br />
                    <img src={JumboKiosk} alt="Kiosk" className="w-full md:w-2/5 rounded-lg" />
                    <br />
                    I found that using a kiosk is a good way for users to interact with our project idea, so I wanted to test it out. I decided to work on a kiosk idea and drew a sketch based on designs used by big companies today.
                    <br /><br />
                    This Kiosk creates a more personalized experience. The user can then browse and review their selected recipes, as well as choose categories and apply filters. Finally, the user can review their choice and either print out the recipe or send it to their Jumbo App.
                    <br /><br />
                    During the final presentation, we showed the kiosk to the stakeholders, and they were very impressed with the design and the idea behind it. They were especially excited about the personalization of the recipes and the way the user could interact with the kiosk.
                    <br /><br />
                    <img src={Kiosklayout} alt="Kiosk layout" className="w-full md:w-2/5 rounded-lg" />

                    <br /><br />
                    <span className="font-bold text-lg md:text-xl">
                        The App
                    </span>
                    <br />
                    <img src={JumboApp} alt="Kiosk" className="w-full md:w-2/5 rounded-lg" />
                    <br />
                    The app was a big part of the project. I was given the task of creating an app right from the beginning. Luckily, I had already come up with a feature for it during the hackathon. After some thorough discussions, I decided to include this design in our project. However, it quickly became clear that certain changes were needed to turn it into a polished demo-ready product.
                    <br /><br />
                    These changes included adding categories and a search bar, making sure the swiping functionality for the categories was smooth, and carefully aligning every element with our column grid. Throughout this process, I improved my skills in Figma, as I made an app that closely resembles the functionality of the Jumbo app. It's all coded using React!
                    <br /><br />
                    <img src={Applayout} alt="App layout" className="w-2/3 md:w-2/5 rounded-lg" />
                    <br />
                    <span className="font-bold text-lg md:text-xl">
                        The Conclusion
                    </span>
                    <br />
                    The project proved to have been a great success, resulting in my team receiving the award for the most innovative project during the Fontys Innovation Insight Awards. Both my stakeholders and my teachers were especially excited about the project.
                    <br /><br />
                    The project was a great way to show off my skills, and I'm proud of the result. Feel free to check out the design of the project on Figma using the button on top of the page!
                    <br /><br />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between">
                        <img src={Me} alt="Me" className="mb-2 md:mr-2 w-2/3 md:w-2/5 rounded-lg" />
                        <img src={Team} alt="Team" className="mt-2 md:ml-2 w-2/3 md:w-2/5 rounded-lg" />
                    </div>
                </>
            ),
        }
    ];

    return (
        <div>
            <BackNavigator />
            <Projectcomponent
                title="Jumbo"
                projectname="Whats for dinner?"
                description="A.I based recipes tailor-made for you"
                link="https://www.figma.com/file/j7wEJN4oi2FzqNAkdKDiWQ/DXD-Project?type=design&node-id=366%3A979&mode=design&t=wCgHy5ObkkAprVrB-1"
                heroimg={jumboheader}
                btn1="Design"
                btn2="Development"
                btn3="Jumbo"
                processSteps={processSteps}
            />
        </div>
    );
}
