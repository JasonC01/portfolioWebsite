import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { aLevelSubjects, apSubjects } from "../constants";

// import { nusLogo } from "../assets";
import Map from "@mui/icons-material/Map";
import NearMe from "@mui/icons-material/NearMe";

const TestCard = ({ subject, index }) => (
  <motion.div
    variants={fadeIn("down", "spring", 0.5 * index, 0.75)}
    className="w-full  p-[1px] rounded-[20px] shadow-card"
  >
    {/* <div
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-blue-300 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    > */}
    <h3 className="text-[20px] text-white font-bold text-center">{subject}</h3>
    {/* </div> */}
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "", "", "0.5")}
        className="flex flex-col justify-start items-start object-contain mt-5"
      >
        <h1 className="sm:text-[30px] text-[20px] font-black uppercase tracking-wider text-tertiary leading-none">
          National University of Singapore
          <br />
          <span className="text-secondary text-[20px]">
            Bachelor of Computer Science
          </span>
          <br />
          <Map fontSize="small" /> &nbsp;
          <span className="text-[20px]">Singapore</span>
        </h1>
        <br />
        <h2 className={`${styles.sectionSubText}`}>
          Third year student studying computer science. Completed various
          modules including data structures & algorithms, design and analysis of
          algorithms, and software engineering
        </h2>
      </motion.div>
      <br />
      <motion.div variants={fadeIn("right", "", "", "0.5")}>
        <div className="flex flex-col justify-start items-start object-contain mt-5">
          <h1 className="sm:text-[30px] text-[20px] font-black uppercase tracking-wider text-secondary leading-none">
            Sayfol International School
            <br />
            <span className="text-tertiary text-[20px]">Graduated</span>
            <br />
            <Map fontSize="small" /> &nbsp;
            <span className="text-[20px]">Kuala Lumpur, Malaysia</span>
          </h1>
          <br />
        </div>

        <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-between mt-8 sm:space-y-0 space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="sm:text-[25px] text-[15px] font-black uppercase tracking-wider text-tertiary leading-none mb-5">
              5 A<sup>*</sup> in Edexcel A Level
            </h1>
            <div>
              {aLevelSubjects.map((subject, index) => (
                <TestCard index={index} key={subject.subject} {...subject} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="sm:text-[25px] text-[15px] font-black uppercase tracking-wider text-tertiary leading-none mb-5">
              Score of 5 in 4 AP tests
            </h1>
            <div>
              {apSubjects.map((subject, index) => (
                <TestCard index={index} key={subject.subject} {...subject} />
              ))}
            </div>
          </div>
        </div>

        {/* <NearMe /> */}
        {/* <h2 className="m-0">Bachelor of Computer Science</h2> */}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
