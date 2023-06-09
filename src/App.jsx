import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experiences,
  Navbar,
  Projects,
  Rain,
  RainCanvas,
  Raining,
  StarsCanvas,
} from "./components";
import { motion } from "framer-motion";

import Hero from "./components/Hero";
import Fader from "./components/Fader";

function App() {
  return (
    // <div className="relative z-0 y-0">Hi</div>
    // #AABAAE
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        {/* <div className="bg-[#AABAAE]  bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
        {/* </div> */}
        {/* <div className="bg-[#8AAAE5] bg-cover bg-no-repeat bg-center"> */}
        <About />
        {/* </div> */}

        <Education />

        <div className="relative z-90">
          <div className="">
            <Projects />
          </div>

          {/* <RainCanvas /> */}

          {/* <StarsCanvas /> */}
          {/* <ReactRain numDrops="500" /> */}
        </div>
        <Experiences />
        <div className="">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
