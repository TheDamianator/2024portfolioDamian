import React from "react";
import Projectcomponent from "./component/Projectcomponent";
import boxplosiveheader from "./assets/boxplosiveheader.png";
import BackNavigator from "./BackNavigator";

//images
import bpapplayout from "./assets/projects/bpapplayout.png";
import bpleft from "./assets/projects/bpleft.png";
import bpright from "./assets/projects/bpright.png";
import testVideo from "./assets/projects/test.mp4";

export default function Boxplosive() {
    const processSteps = [
        {
            text: (
                <>
                    <h2 className="font-bold text-3xl mb-4">The Company</h2>
                    <p>
                        Boxplosive is a growing business that seeks to enhance its engagement with the GenZ target audience. They have a strong focus on offering loyalty solutions to companies that are interested. Their biggest product is an app, accompanied by a loyalty CMS where the companies can set up a loyalty program and offer promotions to those who have enough points or reach a different requirement of that specific promotion.
                    </p>
                    <p>
                        At the moment stores like Blokker and Etos are using this app and CMS to encourage customers to scan their customer cards and redeem their points and ultimately get more customers to become loyal to them.
                    </p>
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Assignment</h2>
                    <p>
                        The assignment was to explore the use of non-fungible tokens (NFTs) in the company's existing app. The company's two CEOs were interested in experimenting with NFTs to understand how they could be used within their current platform. As an intern, I have been tasked with experimenting with NFTs and creating a prototype for the company to test with users.
                    </p>
                    <p>
                        How can a new loyalty program app incorporating NFT rewards be created and designed to effectively engage the GenZ audience and make it accessible and appealing to them within the Boxplosive brand context?
                    </p>
                    <img src={bpapplayout} alt="App Layout" className="w-full md:w-2/4 rounded-lg mb-4" />
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Solution</h2>
                    <p>
                        The solution unfolded through meticulous planning and execution across various phases. Extensive research laid the foundation, delving into user preferences and technical requirements.
                    </p>
                    <p>
                        Collaborative design sessions brought clarity to project goals, iteratively refining concepts to align with stakeholder expectations. Development embraced agile methodologies, fostering adaptability and responsiveness to evolving needs. User testing provided invaluable insights, driving iterative enhancements to ensure a seamless user experience.
                    </p>
                    <div className="flex flex-col md:flex-row mb-4">
                        <img src={bpleft} alt="Bp Left" className="w-full md:w-2/6 rounded-lg mr-0 md:mr-4 mb-4 md:mb-0" />
                        <img src={bpright} alt="Bp Right" className="w-full md:w-2/6 rounded-lg ml-0 md:ml-4" />
                    </div>
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Video</h2>
                    <video controls className="w-full md:w-1/6 rounded-lg mb-4">
                        <source src={testVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="font-bold text-3xl mt-8 mb-4">The Conclusion</h2>
                    <p>
                        The NFT app provides a rewarding and engaging experience while catering to the preferences and interests of the GenZ audience. It may increase customer retention, draw in new clients, and encourage steadfast loyalty. By utilizing the app's features and advantages, Boxplosive can boost its brand recognition and position itself as a forward-thinking business that values its clients.
                    </p>
                    <p>
                        I recommended that the company should perform deeper research into the technical implementation of NFTs, such as blockchain platform selection, smart contract creation, and interaction with existing loyalty program systems.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div>
            <BackNavigator />
            <Projectcomponent
                title="Boxplosive"
                projectname="NFTs in loyalty programs"
                description="Internship focused on exploring the use of NFTs in loyalty programs."
                link="https://www.google.com"
                heroimg={boxplosiveheader}
                btn1="Design"
                btn2="Development"
                btn3="Boxplosive"
                processSteps={processSteps}
            />
        </div>
    );
}
