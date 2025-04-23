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
    <div className=" bg-[#121212] w-full">
      {/* image */}
      <div className='image-container'>
        <img
          src="src/assets/aboutus/wallpaperflare-cropped (1).jpg"
          alt=""
          className="rounded-xl shadow-lg object-fit w-full h-85"
        />
      </div>

      {/* breadcrumb */}
      <div className="breadcrumb-overlay mx-auto">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* about content */}
      <div className="container mx-auto flex flex-row gap-20 justify-center text-center mt-10">
        <div className="flex flex-col gap-10">
          <div className="border-2 border-gray-300 rounded-md p-4">
            <h1 className="text-2xl font-bold text-[#FF0000] pb-1 pl-10">About Us</h1>
            <p className="text-[#dbd9d9] leading-relaxed font-medium text-xl">
              We are a passionate team of five dedicated to helping individuals improve their fitness in
              simple, accessible ways. Our website offers free exercises and practical fitness tips to
              help you stay healthy, strong, and active – no complicated routines, just straightforward
              solutions.
            </p>
          </div>

          <div className="flex flex-row gap-10">
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-[#FF0000] pb-1">Our Mission</h2>
              <p className="text-[#dbd9d9] leading-relaxed font-medium text-xl">
                Our mission is to make fitness accessible for everyone. We aim to provide easy-to-follow
                exercises, including squats and other fundamental movements, to help individuals reach
                their fitness goals without the need for expensive equipment or complicated programs.
              </p>
            </div>
            <div className="border-2 border-gray-300 rounded-md p-4">
              <h2 className="text-2xl font-bold text-[#FF0000] pb-1">Our Vission</h2>
              <div className="text-[#dbd9d9] leading-relaxed font-medium text-xl">
                Our vision is to create a global fitness community where people of all ages can improve
                their health and well-being through simple, effective exercises. We strive to inspire a
                healthy lifestyle for everyone, regardless of experience or background.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* meet our team */}
      <section className="container mx-auto flex flex-col gap-3 mt-10">
        <div className="text-center font-bold text-2xl text-[#FF0000]">
          <h1>Meet Our Team</h1>
        </div>

        <div className="grid grid-cols-5 gap-36 place-items-center h-[40vh]">
          {[
            { name: 'Mohamed', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
            { name: 'Fares', img: 'src/assets/aboutus/fares aboutus.jpg' },
            { name: 'Omar', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
            { name: 'Rofida', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
            { name: 'Noha', img: 'src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg' },
          ].map((member, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={member.img} alt={member.name} loading="lazy" decoding="async" />
                <h2>{member.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
