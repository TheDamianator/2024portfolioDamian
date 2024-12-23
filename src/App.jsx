import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Jumbo from "./Jumbo";
import Boxplosive from "./Boxplosive";
import LDR from "./LDR";
import IO from "./IO";
import AnimatedCursor from "react-animated-cursor";
import AdaptiveScroll from "react-adaptive-scroll";

import "./App.css";

function App() {
  return (
    <div className="hero">
      <BrowserRouter>
        <AdaptiveScroll />

        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Jumbo" element={<Jumbo />} />
          <Route path="/Boxplosive" element={<Boxplosive />} />
          <Route path="/LDR" element={<LDR />} />
          <Route path="/IO" element={<IO />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
