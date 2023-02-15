import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const Projects = () => {
  const data = [
    {
      name: "Food Place",
      desc: "Food Place is one of my self projects. It is a website design for an imaginary food subscription service startup that is intended to make people eat well and healthy in todays busy world without having to worry about cooking daily.",
      tags: ["Js", "Html", "Css", "Git", "Ps"],
      link: "https://animeshdev1999.github.io/Food-place/",
      gitl: "https://github.com/AnimeshDev1999/Food-place",
    },
    {
      name: "Shuttle",
      desc: "Shuttle is a project of mine that included a group of 3 people working on it we synced our work in order to get this project together the project is the update to previously existing website named shuttle and was created again from scratch.",
      tags: ["Js", "Html", "Css", "Git", "Collab"],
      link: "https://animeshdev1999.github.io/Shuttle-new/",
      gitl: "https://github.com/AnimeshDev1999/Shuttle-new",
    },
    {
      name: "Weather",
      desc: "Weather is a self project by me it uses open weather API to show the forecast world wide with things like lowest/highest temperature, location, time etc. It also contains java apps like time and weather updater.",
      tags: ["Js", "Html", "Css", "Git", "Api"],
      link: "https://animeshdev1999.github.io/Weather-app/",
      gitl: "https://github.com/AnimeshDev1999/Weather-app",
    },
    {
      name: "Food Place",
      desc: "Food Place is one of my self projects. It is a website design for an imaginary food subscription service startup that is intended to make people eat well and healthy in todays busy world without having to worry about cooking daily.",
      tags: ["Js", "Html", "Css", "Git", "Ps"],
      link: "https://animeshdev1999.github.io/Food-place/",
      gitl: "https://github.com/AnimeshDev1999/Food-place",
    },
    {
      name: "Shuttle",
      desc: "Shuttle is a project of mine that included a group of 3 people working on it we synced our work in order to get this project together the project is the update to previously existing website named shuttle and was created again from scratch.",
      tags: ["Js", "Html", "Css", "Git", "Collab"],
      link: "https://animeshdev1999.github.io/Shuttle-new/",
      gitl: "https://github.com/AnimeshDev1999/Shuttle-new",
    },
    {
      name: "Weather",
      desc: "Weather is a self project by me it uses open weather API to show the forecast world wide with things like lowest/highest temperature, location, time etc. It also contains java apps like time and weather updater.",
      tags: ["Js", "Html", "Css", "Git", "Api"],
      link: "https://animeshdev1999.github.io/Weather-app/",
      gitl: "https://github.com/AnimeshDev1999/Weather-app",
    },
  ];

  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div animate={anim} initial={init} className="w-3/5">
        <h1 className="text-6xl font-bold text-ascent mb-8 bg-gradient-to-br animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
          Projects.
        </h1>
        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          layout
          className="flex gap-10"
        >
          {data.map((entry) => (
            <Card info={entry} key={entry.name}></Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Projects;
