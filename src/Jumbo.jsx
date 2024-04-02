import React from "react";
import Projectcomponent from "./component/Projectcomponent";
import jumboheader from "./assets/jumboheader.png"

export default function Jumbo() {
    const processSteps=[
        {
            text:(
<>
<span style={{fontWeight : "bold", fontSize : "48px"}}>
The situation
</span> <br></br>
The context of this Project was very clear, we had to work together with Jumbo to imagine and design a way for customers to know what to eat and most importantly, it had to be personal for that customer. there would an AI that would take their previously bought items into account, as well as their estimated diet and food preferences. 

This program would then show the user a big list of recipes and categories to choose from. the user can still choose to see recipes from specific categories and even refine the options by selecting various filters like spicy, quick and american  <br></br>
<span style={{fontWeight : "bold", fontSize : "48px"}}>
The Kiosk</span> <br></br>
</>

            ),}
    ]
    return (
        <div>  
       <Projectcomponent
       title="Jumbo"
       projectname="Whats for dinner?"
       description="A.I based recipes tailor made for you"
       link="https://www.google.com"
      heroimg={jumboheader}
       btn1="design"
       btn2="development"
       btn3="Jumbo"
       processSteps={processSteps}

       />
        </div> 
    );
}
