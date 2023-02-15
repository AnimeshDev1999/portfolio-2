import git from "../images/github.svg";
import linked from "../images/in.svg";
import insta from "../images/insta.svg";
import what from "../images/what.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div animate={anim} initial={init} className="w-3/5">
        <h1 className="text-6xl font-bold text-ascent mb-8 bg-gradient-to-br animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
          Get in touch.
        </h1>
        <p className="text-xl text-ascent mb-8 leading-relaxed">
          I am actively looking for work so let's have a cup of coffee and
          discuss your work or just drop a text with your contact info and I
          will reach out to you.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            background: "#eeeeee",
            color: "#10101a",
            fontWeight: "bold",
          }}
          whileTap={{ scale: 0.9 }}
          className="border-2 px-8 py-4 mb-8 bg-base text-primary rounded-md text-2xl"
        >
          Send an E-mail
        </motion.button>
        <div className="flex gap-4 justify-end mb-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_web_canavas_/?igshid=ZDdkNTZiNTM%3D"
          >
            <img className="socials" src={insta} alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/animesh-kumar-b44685217/"
          >
            <img className="socials" src={linked} alt="" />
          </a>
          <a href="tel:92609-98607">
            <img className="socials" src={what} alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AnimeshDev1999"
          >
            <img className="socials" src={git} alt="" />
          </a>
        </div>
        <p className="text-2xl text-ascent text-right mb-10">
          animesh99dev@gmail.com
        </p>
      </motion.div>
    </div>
  );
};
export default Contact;
