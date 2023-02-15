import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <div className="absolute top-12 right-12">
      <motion.ul className="bg-glassalttwo backdrop-blur-sm px-6 shadow-sm shadow-glassalt border-1 border-glassalttwo rounded-xl py-4 nav-box flex gap-6">
        <motion.li
          onClick={props.info}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="nav-item"
        >
          Home
        </motion.li>
        <motion.li
          onClick={props.info}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="nav-item"
        >
          About
        </motion.li>
        <motion.li
          onClick={props.info}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="nav-item"
        >
          Work
        </motion.li>
        <motion.li
          onClick={props.info}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="nav-item"
        >
          Cantact
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
