import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Detail";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const animasi = useRef();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };
  const [animationCompleted, setAnimationCompleted] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationCompleted(true);
      },
    });

    if (!animationCompleted) {
      tl.from(
        h11.current,
        {
          x: "-100%",
          delay: 0.8,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
        .from(
          h12.current,
          {
            x: "-100%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        )
        .from(
          h13.current,
          {
            x: "-100%",
            delay: 0.1,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        )
        .from(
          myimageref.current,
          {
            x: "200%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        )
        .from(
          animasi.current,
          {
            x: "-100%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
        );
    }
  }, [animationCompleted]);
  const items = [
    { id: 1, subtitle: "Subtitle 1", title: "Title 1" },
    { id: 2, subtitle: "Subtitle 2", title: "Title 2" },
    // Add more items as needed
  ];

  return (
    <main className="bg-[#060D0F] mx-auto max-width section md:flex justify-between items-center sm:px-[200px] py-[150px]">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-[#f5ab3b] md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          I'M NAJLA NUR ADILA<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="w-[30rem] text-white font-['Inter'] text-[20px] leading-[normal]"
        >
          <br />
          Passionate and experienced 
          Backend Developer with a strong focus on creating powerful and efficient server-side applications. I am 
          dedicated to writing clean, maintainable code and applying modern architectural principles to improve 
          overall system performance and functionality.

        </h2>
        {/* {items.map((item) => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence> */}

        <motion.div
          ref={animasi}
          className="box mt-5 w-[11.8125rem] h-[1.5cm] rounded-full bg-[#f5ab3b] flex justify-center items-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button
            className="text-white font-['Inter'] flex justify-center text-s font-bold"
            onClick={handleButtonClick}
          >
            More About Me
          </button>
        </motion.div>
      </div>

      <div className="mt-5 md:mt-[50px]">
        <img
          ref={myimageref}
          className="flex-shrink-0 w-[9.375rem] h-[11.0625rem] rounded-[5%]"
          src={img}
          alt="Najla"
        />
      </div>
    </main>
  );
};

export default HomePage;
