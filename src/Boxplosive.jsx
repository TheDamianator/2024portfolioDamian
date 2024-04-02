import React from "react";
import Projectcomponent from "./component/Projectcomponent";
import boxplosiveheader from "./assets/boxplosiveheader.png"
import BackNavigator from "./BackNavigator";

export default function Boxplosive() {
    const processSteps = [
        {
            text: (
                <>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Company
                    </span>
                    <br></br>
                    Boxplosive is a growing business that seeks to enhance its engagement with the GenZ target audience. They have a strong focus on offering loyalty solutions to companies that are interested. Their biggest product is an app, accompanied by a loyalty CMS where the companies can set up a loyalty program and offer promotions to those who have enough points or reach a different requirement of that specific promotion. 
                    <br/> <br/>
                    At the moment stores like Blokker and Etos are using this app and CMS to encourage customers to scan their customer cards and redeem their points and ultimately get more customers to become loyal to them.
                    <br/>

                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                        The Assignment
                    </span>
                    <br/>

                    The assignment was to explore the use of non-fungible tokens (NFTs) in the company's existing app. The company's two CEOs were interested in experimenting with NFTs to understand how they could be used within their current platform. As an intern, I have been tasked with experimenting with NFTs and creating a prototype for the company to test with users.
                    <br/><br/>
                    How can a new loyalty program app incorporating NFT rewards be created and designed to effectively engage the GenZ audience and make it accessible and appealing to them within the Boxplosive brand context?

                    <br/>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                    The Solution
                    </span>
                    <br/>

                     i still have to write this part
                     but i will do it soon
                     i promise
                        i swear
                        i will
                        i will, why are you still reading this?
                        i will do it soon, im just lazy right now
                    why are you so interested in this part?
                    theres nothing here.
                    ok fine, i will write it soon
                    but not now
                    later
                    ok?
                    ok
                    bye
                    wait why are you still here? i said bye already
                    ok fine, i will write it now
                    i will, i promise, i swear, just give me a second
                    ok?
                    ok
                    bye
                    im having a hard time writing this part.... i dont want to write it now! i told.
                    <br/>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                    The Video
                    </span>
                    <br/>

                    This video demonstrates the step-by-step process of creating a wallet within the app. It highlights essential features such as redeeming points, setting up a password, viewing NFTs in the wallet, and adjusting settings or profile picture. 

                    This user flow is designed to ensure a smooth and intuitive experience for users as they establish their wallet within the app.  

                    <br/>
                    <span style={{ fontWeight: "bold", fontSize: "48px" }}>
                    The Conclusion
                    </span>
                    <br/>

                    The NFT app provides a rewarding and engaging experience while catering to the preferences and interests of the GenZ audience. It may increase customer retention, draw in new clients, and encourage steadfast loyalty. By utilizing the app's features and advantages, Boxplosive can boost its brand recognition and position itself as a forward-thinking business that values its clients.
                    <br/><br/>
                    I recommended that the company should perform deeper research into the technical implementation of NFTs, such as blockchain platform selection, smart contract creation, and interaction with existing loyalty program systems.       
             
                     </>

            ),
        }
    ]
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
