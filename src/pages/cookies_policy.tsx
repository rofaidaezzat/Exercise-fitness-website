import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";

const CookiesPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      startEvent: 'DOMContentLoaded',
      disable: 'mobile',
      offset: 50,
      delay: 0,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen">
      <Section className="text-white py-16 px-6 md:px-12 lg:px-24">
        <h1 
          data-aos="fade-down"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        >
          Cookies <span className="text-[#FF0000]">Policy</span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section data-aos="fade-up" className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF0000]">What Are Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="100" className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF0000]">How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Essential cookies for website functionality</li>
              <li>Authentication and security cookies</li>
              <li>Preference cookies to remember your settings</li>
              <li>Analytics cookies to understand how you use our website</li>
              <li>Marketing cookies to deliver relevant advertisements</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="200" className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF0000]">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Session Cookies</h3>
                <p className="text-gray-300 leading-relaxed">
                  These are temporary cookies that expire when you close your browser. They help maintain your session 
                  while you browse our website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Persistent Cookies</h3>
                <p className="text-gray-300 leading-relaxed">
                  These cookies remain on your device for a specified period. They help us remember your preferences 
                  and provide a better user experience.
                </p>
              </div>
            </div>
          </section>

          <section data-aos="fade-up" data-aos-delay="300" className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF0000]">Managing Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies 
              may negatively impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Browser Settings</h3>
                <p className="text-gray-300 leading-relaxed">
                  Most web browsers allow you to control cookies through their settings preferences. However, limiting 
                  cookies may impact your experience using our website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Third-Party Cookies</h3>
                <p className="text-gray-300 leading-relaxed">
                  Some cookies are placed by third-party services that appear on our pages. We cannot control these 
                  cookies and you should check the third-party's website for more information.
                </p>
              </div>
            </div>
          </section>

          <section data-aos="fade-up" data-aos-delay="400" className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF0000]">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookies Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. Please visit this page regularly to stay informed about our 
              use of cookies.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="500" className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF0000]">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: privacy@fitnesswebsite.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </Section>
    </div>
  );
};

export default CookiesPolicy; 