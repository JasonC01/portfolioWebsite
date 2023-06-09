import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experience } from "../constants";
import { SectionWrapper } from "./hoc";
import { textVariant } from "../utils/motion";
import Create from "@mui/icons-material/Create";
import { koreanFlag } from "../assets";

const icons = [
  <div className="flex justify-center items-center w-full h-full">
    <img src={koreanFlag} alt="Flag" className="object-contain" />
  </div>,
  //   <div className="flex justify-center items-center w-full h-full">
  <Create />,
  //   </div>,
];

const ExperienceCard = ({ experience, icon }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#575960", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #575960" }}
    date={experience.date}
    iconStyle={{ background: "#FFFFFF" }}
    icon={icon}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    </div>
    <div>{experience.content}</div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="mt-20">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experiences.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experience.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              icon={icons[index]}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
