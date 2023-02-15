import html from "../images/html5.svg";
import css from "../images/css3.svg";
import js from "../images/javascript.svg";
import rct from "../images/react.svg";
import tw from "../images/palette.svg";
import git from "../images/github.svg";
import fire from "../images/firebase.svg";
import { motion } from "framer-motion";

const About = () => {
  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div animate={anim} initial={init} className="w-3/5">
        <h1 className="text-6xl font-bold text-ascent mb-8 bg-gradient-to-br animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
          About.
        </h1>
        <p className="text-xl text-ascent mb-4 leading-relaxed">
          Hello, my name is Animesh Kumar located in{" "}
          <span className="text-primary font-semibold">Lucknow, India</span> and
          i love creating web related elements. To be accurate I am a front-end
          web developer and continuously learning new technologies to work on. I
          can provide efficiently written, well documented code and i believe
          that a neat and clean code is as important as a good looking website.
        </p>
        <p className="text-xl font-semibold mb-6">
          The technologies I work on:
        </p>
        <div className="flex gap-4">
          <p className="tech">
            <img className="h-8 w-8 inline" src={html} alt="" /> HTML5
          </p>
          <p className="tech">
            <img className="h-8 w-8 inline" src={css} alt="" /> CSS
          </p>
          <p className="tech">
            <img className="h-8 w-8 inline" src={js} alt="" /> Javascript(ES6+)
          </p>
          <p className="tech">
            <img className="h-8 w-8 inline" src={rct} alt="" /> React
          </p>
          <p className="tech">
            <img className="h-8 w-8 inline" src={tw} alt="" /> Tailwind
          </p>
          <p className="tech">
            <img className="h-8 w-8 inline" src={git} alt="" /> Git
          </p>
          <p className="tech">
            <img className="h-8 w-8 inline" src={fire} alt="" /> Firebase
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default About;
