import { motion } from "framer-motion";
import git from "../images/github.svg";
import opn from "../images/open.svg";

const Card = (props) => {
  return (
    <motion.div className="bg-glassalttwo backdrop-blur-sm shadow-sm shadow-glassalt border-1 border-glassalttwo rounded-xl py-6 px-12 flex flex-col justify-between relative">
      <motion.h1 className="text-4xl font-bold mb-4 bg-gradient-to-r animate-gradient-x text-gradient from-yellow-500 to-rose-800">
        <a target="_blank" rel="noreferrer" href={props.info.link}>
          {props.info.name}
        </a>
      </motion.h1>
      <motion.p layout className="mb-4 text-ascent">
        {props.info.desc}
      </motion.p>
      <div className="flex gap-2 mb-4">
        {props.info.tags.map((tag) => (
          <span className="tag font-medium" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 justify-end">
        <a target="_blank" rel="noreferrer" href={props.info.link}>
          <img className="h-8 w-8 bg-ascent rounded-md" src={opn} alt="" />
        </a>
        <a target="_blank" rel="noreferrer" href={props.info.gitl}>
          <img className="h-8 w-8 bg-ascent rounded-md" src={git} alt="" />
        </a>
      </div>
    </motion.div>
  );
};
export default Card;
