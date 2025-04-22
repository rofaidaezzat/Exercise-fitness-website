import { BlurIn } from "@/components/eldoraui/blurin";
const Home = () => {
  return (
    <div className="">
      {/* first section */}
      <div className="pt-24 px-24 lg:pt-28 bg-[linear-gradient(to_right,_rgba(0,0,0,1)_4%,_rgba(0,0,0,0.07)_100%)] w-full h-screen flex justify-center items-center">
        {/* first div description */}
        <div className="flex-1 flex flex-col space-y-10">
          <BlurIn className="font-display text-center text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]">
            <p className="font-extrabold text-5xl text-white">
              LOS ANGELES’ PREMIER{" "}
              <span className="text-[#FF0000]">
                MOBILE FITNESS AND HEALTH PROFESSIONALS
              </span>
            </p>
          </BlurIn>

          <p className="font-extrabold text-5xl text-white">
            LOS ANGELES’ PREMIER{" "}
            <span className="text-[#FF0000] ">
              MOBILE FITNESS AND HEALTH PROFESSIONALS
            </span>
          </p>
          <p className="text-white">
            Level up your fitness and health journey with XLEVELs onsite
            personalized training, fitness technology and dietitian services
          </p>
          <a
            href="/exercises"
            className="px-5 py-3 font-semibold w-fit rounded-lg border-2 border-[#FF0000] text-white"
          >
            Get Start
          </a>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center justify-center px-2 border-r-2 border-white">
              <span className="text-[#FF0000] text-2xl font-semibold">05+</span>
              <p className="text-white"> Years of Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 border-r-2 border-white">
              <span className="text-[#FF0000] text-2xl font-semibold">
                1000+
              </span>
              <p className="text-white">Members Join</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <span className="text-[#FF0000] text-2xl font-semibold">
                1000+
              </span>
              <p className="text-white"> Happy members</p>
            </div>
          </div>
        </div>
        {/* second de image */}
        <div>
          <div>
            <p className="font-poppins "></p>
          </div>
          <div className="flex-1 h-[650px] w-[500px]">
            <img
              className="w-[100%] h-[100%] "
              src="src\assets\home\photo_2025-04-21_11-30-50-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* second section */}
      <div>dpijpidj</div>
      {/* third section */}
      {/* fourth section */}
      {/* fifth section */}
      {/* sixth section */}
      {/* seventh section */}
    </div>
  );
};

export default Home;
