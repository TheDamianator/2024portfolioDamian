import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentGMT, setCurrentGMT] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setCurrentGMT(now.toLocaleTimeString("en-US", { timeZoneName: "short", timeZone: "GMT" }));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <div
      id="contact"
      className="bg-secondarygreen min-h-screen font-custom font-bold flex flex-col justify-center items-center relative"
    >
      <div className="text-center mb-8">
        <Fade fraction={0.1}>
          <h1 className="text-5xl sm:text-9xl text-lightertext mb-4">GET IN TOUCH</h1>
        </Fade>
        <Fade fraction={0.1}>
          <h2 className="text-3xl sm:text-6xl text-lightertext mb-4">Let's stay in CONTACT</h2>
        </Fade>
        <div className="text-left mb-8 flex flex-col items-center">
          {/* Center vertically */}
          <a href="mailto:damiancaelen@gmail.com" className="text-lg sm:text-xl text-NewColorNav mt-10 mb-2">
            damiancaelen@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/damian-caelen-970a8a174/"
            className="text-lg sm:text-xl text-NewColorNav hover:underline"
          >
            linkedin.com/damiancaelen
          </a>
          <br /> <br />
          <button
            onClick={() => handleDownload("DamianCaelen.pdf")}
            className="text-lg sm:text-xl text-NewColorNav hover:underline"
          >
            CV Nederlands
          </button>
          <button
            onClick={() => handleDownload("DamianCaelenEN.pdf")}
            className="text-lg sm:text-xl text-NewColorNav hover:underline"
          >
            Resume English
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 bg-secondarygreen text-lightertext flex justify-between">
        <div className="text-sm sm:text-base flex items-center">&copy; 2025 Damian Caelen</div>
        <div className="text-base sm:text-xl">Local time: {currentTime} CET + 01:00</div>
      </div>
    </div>
  );
}
