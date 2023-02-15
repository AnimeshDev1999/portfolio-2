import { motion } from "framer-motion";

const Hero = (props) => {
  let myDate = new Date();
  let hrs = myDate.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div animate={anim} initial={init} className="w-3/5">
        <h3 className="text-2xl text-ascent mb-8">{greet}, my name is</h3>
        <h1 className="text-8xl font-bold mb-2">Animesh Kumar</h1>
        <h1 className="text-8xl font-bold text-ascent mb-8">
          I am a{" "}
          <span className="bg-gradient-to-r animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
            web developer
          </span>
          {""}.
        </h1>
        <p className="text-xl text-ascent mb-8">
          To be specific I am a front-end web developer who likes to code
          everything from scratch and like to add creativity to everything I
          make, and I continue to learn. Always.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            background: "#eeeeee",
            color: "#10101a",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={props.info}
          className="border-2 px-8 py-4 bg-base text-primary rounded-md text-2xl cursor-none"
        >
          Work with me
        </motion.button>
      </motion.div>
    </div>
  );
};
export default Hero;