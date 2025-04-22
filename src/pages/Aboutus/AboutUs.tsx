import React from 'react';
import './Aboutus.css';
const AboutUs = () => {
  
  return (
    <div className="bg-[#121212] w-full ">
      <div >
          <img src="src/assets/aboutus/aboutus2.png" alt="" className="rounded-xl shadow-lg object-cover w-full  " />
        </div>
      <div className="container mx-auto flex flex-row gap-20 justify-center text-center mt-10">

      

        <div className="flex flex-col gap-10 ">
        <div className="border-2 border-gray-300 rounded-md p-4 ">
          <h1 className="text-2xl font-bold text-[#FE543D] pb-1">AboutUs</h1>
          <p className=" text-gray-700 leading-relaxed font-medium text-xl ">We are a passionate team of five dedicated to helping individuals improve their fitness in simple, accessible ways. Our website offers free exercises and practical fitness tips to help you stay healthy, strong, and active – no complicated routines, just straightforward solutions.</p>
          </div>
<div className="flex flex-row gap-3">
  <div className="border-2 border-gray-300 rounded-lg p-4">
<h2 className="text-2xl font-bold text-[#FE543D] pb-1">Our mission</h2>
<p className=" text-gray-700 leading-relaxed font-medium text-xl ">Our mission is to make fitness accessible for everyone. We aim to provide easy-to-follow exercises, including squats and other fundamental movements, to help individuals reach their fitness goals without the need for expensive equipment or complicated programs.</p>
</div>
<div className="border-2 border-gray-300 rounded-md p-4 ">
<h2 className="text-2xl font-bold text-[#FE543D] pb-1">Our Vission:</h2>
<div className=" text-gray-700 leading-relaxed font-medium text-xl ">Our vision is to create a global fitness community where people of all ages can improve their health and well-being through simple, effective exercises. We strive to inspire a healthy lifestyle for everyone, regardless of experience or background.

</div>
</div>
</div>
</div>
        
        </div>
{/* meet our team */}
        <section className="flex flex-col gap-3 mt-10">
        <div className='text-center font-bold text-2xl text-[#FE543D] '>
          <h1>Meet Our Team</h1>
        </div>

        
<div className='grid grid-cols-5 gap-4 place-items-center h-[40vh] '>
<div className="card">
  <div className="card-content">
    <img src="src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg" alt="Mohamed" loading='lazy' decoding="async" />
    <h2>Mohamed</h2>
  </div>
  
</div>
        <div className="card">
  <div className="card-content">
    <img src="src/assets/aboutus/fares aboutus.jpg" alt="Fares" loading='lazy' decoding="async" />
    <h2>Fares</h2>
  </div>
  
</div>
        <div className="card">
  <div className="card-content">
    <img src="src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg" alt="Omar"loading='lazy' decoding="async"  />
    <h2>Omar</h2>
  </div>
  
</div>
        <div className="card">
  <div className="card-content">
    <img src="src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg" alt="Rofida"loading='lazy' decoding="async"  />
    <h2>Rofida</h2>
  </div>
  
</div>
        <div className="card">
  <div className="card-content">
    <img src="src/assets/aboutus/WhatsApp Image 2023-12-21 at 17.03.15_b3a58753.jpg" alt="Noha"loading='lazy' decoding="async"  />
    <h2>Noha</h2>
  </div>
  </div>
  
</div>

        </section>
      </div>
    
    
  );
};

export default AboutUs;
