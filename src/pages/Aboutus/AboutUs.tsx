import "./Aboutus.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import aboutBackground from "../../assets/aboutus/about-background.webp";
import essamImg from "../../assets/aboutus/essam.jpg";
import faresImg from "../../assets/aboutus/fares.jpeg";
import omarImg from "../../assets/aboutus/omar.jpeg";
import rofaidaImg from "../../assets/aboutus/rofaida.jpeg";
import nohaImg from "../../assets/aboutus/noha.jpeg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#11111A] w-full">
      {/* image */}
      <div className="relative image-container">
        <img
          src={aboutBackground}
          alt="About Us Background"
          className="w-full h-[800px] object-cover opacity-40 pt-11 sm:pt-8 md:pt-8 lg:pt-0"
          data-aos="fade-down"
        />

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1
            className="text-white text-5xl font-bold drop-shadow-2xl"
            data-aos="fade-up"
          >
            About <span className="text-[#FF0000]">Us</span>
          </h1>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-[#11111A] xl:gap-80 text-white px-8 py-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-1/2 space-y-6 xl:pl-64" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold italic text-[#FF0000]">
            OUR STORY
          </h2>
          <p className="text-2xl md:text-3xl font-bold italic leading-snug">
            WE WANT KICK HUNDRED –<br />
            YEAR–OLDS
          </p>
        </div>
        <div
          className="md:w-1/2 space-y-6 text-lg leading-relaxed font-extrabold italic text-wh mt-10 md:mt-0"
          data-aos="fade-right"
        >
          <p>
            <span className="text-[#FF0000]">Flowforma</span> was created to
            make fitness simple, smart, and sustainable.
            <br />
            We wanted a place where anyone—whether starting out or leveling
            <br />
            up—could find guided workouts and understand exactly how their
            <br />
            effort translates into calories burned.
          </p>
          <p>
            With a focus on clarity and results,{" "}
            <span className="text-[#FF0000]">Flowforma</span> combines curated
            exercise
            <br />
            routines with intelligent calorie tracking to help users stay on top
            of their
            <br />
            fitness goals, one rep and one meal at a time.
          </p>
          <p>
            <span className="text-[#FF0000]">Our goal?</span> To give everyone
            the tools they need to move better, eat smarter,
            <br />
            and stay in control of their health journey—every step of the way.
          </p>
        </div>
      </div>

      {/* Meet Our Team */}
      <section className="container mx-auto flex flex-col gap-3 mt-10 px-6 text-center">
        <div className="font-bold text-2xl text-[#FF0000]" data-aos="fade-up">
          <h1>Meet Our Team</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-36 place-items-center mt-6 pb-5">
          <div className="card" data-aos="zoom-in" data-aos-delay="0">
            <div className="card-content text-center">
              <img
                src={essamImg}
                alt="Mohamed"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h2 className="mt-2 font-semibold text-white">Mohamed</h2>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <div className="card-content text-center">
              <img
                src={faresImg}
                alt="Fares"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h2 className="mt-2 font-semibold text-white">Fares</h2>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-content text-center">
              <img
                src={omarImg}
                alt="Omar"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h2 className="mt-2 font-semibold text-white">Omar</h2>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <div className="card-content text-center">
              <img
                src={rofaidaImg}
                alt="Rofaida"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h2 className="mt-2 font-semibold text-white">Rofaida</h2>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="400">
            <div className="card-content text-center">
              <img
                src={nohaImg}
                alt="Noha"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h2 className="mt-2 font-semibold text-white">Noha</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
