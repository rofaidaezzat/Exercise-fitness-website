import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const faqs = [
    {
      question: "What is FlowForma?",
      answer: "FlowForma is a comprehensive fitness platform that helps you achieve your fitness goals through personalized workout plans, nutrition guidance, and progress tracking. We combine expert knowledge with technology to make fitness accessible to everyone."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply create an account, complete your fitness profile, and you'll receive a personalized workout plan based on your goals, fitness level, and preferences. You can then start tracking your progress and accessing our extensive exercise library."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store to access your workouts, track your progress, and stay connected with your fitness journey on the go."
    },
    {
      question: "How much does it cost?",
      answer: "We offer both free and premium membership options. The free plan includes basic features and access to our exercise library. Our premium membership provides additional features like personalized workout plans, nutrition guidance, and advanced progress tracking. Check our pricing page for detailed information."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you'll continue to have access to your premium features until the end of your current billing period."
    },
    {
      question: "How do I track my progress?",
      answer: "Our platform provides various tools to track your progress, including workout logs, body measurements, progress photos, and performance metrics. You can view your progress over time through interactive charts and graphs in your dashboard."
    },
    {
      question: "Are the workouts suitable for beginners?",
      answer: "Absolutely! We offer workouts for all fitness levels, from complete beginners to advanced athletes. Each exercise includes detailed instructions and modifications to ensure you can perform them safely and effectively."
    },
    {
      question: "How often should I update my workout plan?",
      answer: "We recommend updating your workout plan every 4-6 weeks to prevent plateaus and continue making progress. However, our system automatically adjusts your plan based on your performance and feedback."
    }
  ];

  return (
    <div className="bg-[#121212] min-h-screen">
      <Section className="text-white py-16 px-6 md:px-12 lg:px-24">
        <h1 
          data-aos="fade-down"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        >
          Frequently Asked <span className="text-[#FF0000]">Questions</span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#2a2a2a] transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div 
          data-aos="fade-up"
          className="mt-16 bg-[#1a1a1a] rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <Link to="/contactus">
            <button className="px-6 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default FAQ; 