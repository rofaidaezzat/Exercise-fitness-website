import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Aboutus.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => (
  <nav className="flex text-sm text-gray-300 px-4 py-2" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-2">
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-500" />}
          {item.href ? (
            <a href={item.href} className="text-gray-300 hover:text-[#FF0000] transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-[#FF0000]">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

const AboutUs = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ];

  return (
    <div className=" bg-[#11111A] w-full">
      {/* image */}
      <div className="relative image-container ">
  <img
    src="src/assets/aboutus/wallpaperflare-cropped (1).jpg"
    alt=""
    className="rounded-xl shadow-lg object-cover w-full h-85 opacity-25"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold drop-shadow-lg opacity-50">About Us</h1>
  </div>
</div>

      {/* breadcrumb */}
      <div className="breadcrumb-overlay mx-auto">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className=" bg-[#11111A] xl:gap-80 text-white px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between ">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 xl:pl-64">
        <h2 className="text-4xl md:text-5xl font-extrabold italic text-[#FF0000] ">OUR STORY</h2>
        <p className="text-2xl md:text-3xl font-bold italic leading-snug">
          WE WANT KICK HUNDRED –<br />YEAR–OLDS
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-6 text-lg leading-relaxed font-extrabold italic text-wh">
        <p>
        <span className='text-[#FF0000]'>Flowforma</span> was created to make fitness simple, smart, and sustainable<br />. We wanted a place where anyone—whether starting out or leveling<br /> up—could find guided workouts and understand exactly how their<br /> effort translates into calories burned.
        </p>
        <p>
        With a focus on clarity and results, <span className='text-[#FF0000]'>Flowforma</span> combines curated exercise<br /> routines with intelligent calorie tracking to help users stay on top of their<br /> fitness goals, one rep and one meal at a time.
        </p>
        <p>
        <span className='text-[#FF0000]'>Our goal?</span> To give everyone the tools they need to move better, eat smarter,<br /> and stay in control of their health journey—every step of the way.
        </p>
      </div>
    </div>

      {/* meet our team */}
      <section className="container mx-auto flex flex-col gap-3 mt-10 px-6">
  <div className="text-center font-bold text-2xl text-[#FF0000] sm:translate-x-0 md:translate-x-6 lg:translate-x-10 xl:translate-x-[25px]">
    <h1>Meet Our Team</h1>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-36 place-items-center sm:h-auto md:h-[30vh] lg:h-[35vh] xl:h-[40vh] sm:translate-x-0 md:translate-x-6 lg:translate-x-10 xl:translate-x-[25px]">
    {[
      { name: 'Mohamed', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
      { name: 'Fares', img: 'src/assets/aboutus/fares aboutus.jpg' },
      { name: 'Omar', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
      { name: 'Rofida', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
      { name: 'Noha', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
    ].map((member, index) => (
      <div className="card" key={index}>
        <div className="card-content text-center">
          <img
            src={member.img}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
          <h2 className="mt-2 font-semibold text-white">{member.name}</h2>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default AboutUs;
