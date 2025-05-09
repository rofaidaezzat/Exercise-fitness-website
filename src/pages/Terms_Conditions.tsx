import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";

const TermsConditions = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen">
      <Section className="text-white py-16 px-6 md:px-12 lg:px-24">
        <h1 
          data-aos="fade-down"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        >
          Terms & <span className="text-[#FF0000]">Conditions</span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div 
            data-aos="fade-up"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to FlowForma. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our platform.
            </p>
          </div>

          {/* User Accounts */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To access certain features of our platform, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </div>

          {/* Services and Subscriptions */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">3. Services and Subscriptions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our platform offers various fitness and wellness services. By subscribing to our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Pay all applicable fees and charges</li>
              <li>Use the services in accordance with our guidelines</li>
              <li>Not share your account credentials</li>
              <li>Not use the services for any illegal purposes</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are owned by FlowForma and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              FlowForma shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. We do not guarantee that our services will be uninterrupted or error-free.
            </p>
          </div>

          {/* Changes to Terms */}
          <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Contact Information */}
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-[#1a1a1a] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us through our Contact Us page or email us at support@flowforma.com.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TermsConditions; 