import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./Computers";
import Fader from "./Fader";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex-col flex justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-tertiary" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            Hi, I'm{" "}
            <span className="text-tertiary">
              <br className="sm:hidden" />
              Yunseong
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am a third year student at <br className="sm:block hidden" />
            National University of Singapore <br className="sm:block hidden" />
            studying computer science
          </p>
        </div>
      </div>
      {/* Justify-center for horizontal alignmemnt, 
        items-start for vertical alignment */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          {/* <div className="w-[300px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2"> */}
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-white justify-center items-center"
          >
            Scroll to view more
          </motion.div>
          {/* </div> */}
        </a>
      </div>
    </section>
  );
};

export default Hero;
