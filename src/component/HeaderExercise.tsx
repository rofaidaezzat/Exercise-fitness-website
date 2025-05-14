import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../UI/Image";

// Import images
import slide1 from '../assets/exercise/slide1.jpg';
import slide2 from '../assets/exercise/slide2.jpg';
import slide3 from '../assets/exercise/slide3.jpg';

const HeaderExercise = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: slide1,
      title: "Transform Your Body",
      description:
        "Get ready to embark on a journey of physical transformation with our comprehensive exercise programs.",
    },
    {
      src: slide2,
      title: "Expert Guidance",
      description:
        "Our certified trainers will help you achieve your fitness goals with personalized workout plans.",
    },
    {
      src: slide3,
      title: "State-of-the-Art Equipment",
      description:
        "Access to premium fitness equipment and facilities to maximize your workout potential.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full lg:h-[600px] md:h-[450px] h-[300px] overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <Image
              Imageurl={img.src}
              alt="slideshow"
              className="object-cover object-center w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </motion.div>
      ))}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8 text-center px-4"
        >
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {images[currentImage].title}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg w-full md:w-2/3 lg:w-1/2 max-w-2xl">
            {images[currentImage].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderExercise;