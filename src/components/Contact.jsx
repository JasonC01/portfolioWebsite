import { React, useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import Mail from "@mui/icons-material/Mail";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";

import FlyingCanvas from "./Sky";
import { email } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_zr8yywr",
        "template_87y489f",
        {
          from_name: form.name,
          to_name: "Yunseong",
          from_email: form.email,
          to_email: "chungys02@gmail.com",
          message: form.message,
        },
        "PJX3Yxyj36poY2_U8"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div>
      {/* <div>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </div> */}
      <div className=" flex justify-center items-center">
        <motion.div variants={fadeIn("left", "", "", "0.5")}>
          <div>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="text-white justify-center items-center"
            >
              <div className="text-[300px]">
                <Mail fontSize="inherit" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent shadow-md shadow-white p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-transparent py-4 px-6 placeholder:text-white shadow-md shadow-tertiary text-white rounded-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-transparent py-4 px-6 placeholder:text-white text-white rounded-lg shadow-md shadow-tertiary outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-transparent py-4 px-6 placeholder:text-white text-white shadow-md shadow-primary rounded-lg shadow-md shadow-tertiary outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-transparent py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-tertiary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {/* <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <FlyingCanvas />
      </div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
