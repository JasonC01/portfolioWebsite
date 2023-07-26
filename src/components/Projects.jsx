import React from "react";
import Rainfall from "react-rainfall-animation/src/Rain";
import { connus } from "../assets";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Rain } from ".";
import { Raining } from "../components";
import Fader from "./Fader";

const Projects = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-row w-full h-full items-start justify-start object-contain">
        <img
          src={connus}
          alt="connus"
          className={`sm:h-[30%] sm:w-[30%] h-[42%] w-[42%] -skew-y-12 blur-edge object-contain`}
        />
        {/* </div> */}
        <div className="ml-16 relative -top-16 justify-start items-start">
          <h2 className="font-black text-white lg:text-[100px] sm:text-[80px] xs:text-[50px] text-[40px] lg:leading-[98px]">
            CONNUS
          </h2>
          <p className={`${styles.heroSubText} mt-10 text-white`}>
            Anonymous social platform <br />
            for students at National University of Singapore to communicate.
            Comes with built in timetable, containing all modules being offered
            in the current semester
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <p key="flutter" className={`text-[14px] blue-text-gradient`}>
              # flutter
            </p>
            <p key="firebase" className={`text-[14px] green-text-gradient`}>
              # firebase
            </p>
            <p key="nusmodsAPI" className={`text-[14px] pink-text-gradient`}>
              # nusmodsAPI
            </p>
            <p key="weatherAPI" className={`text-[14px] lime-text-gradient`}>
              # weatherAPI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "");
