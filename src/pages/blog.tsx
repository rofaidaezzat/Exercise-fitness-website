import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "../UI/Section";

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Exercises for Beginners",
      excerpt: "Start your fitness journey with these fundamental exercises that will help you build strength and confidence.",
      image: "/src/assets/blog/exercise-beginner.png",
      date: "March 15, 2024",
      category: "Fitness Tips"
    },
    {
      id: 2,
      title: "Nutrition Guide for Muscle Building",
      excerpt: "Learn about the best foods and supplements to support your muscle growth and recovery.",
      image: "/src/assets/blog/nutrition.jpeg",
      date: "March 12, 2024",
      category: "Nutrition"
    },
    {
      id: 3,
      title: "The Importance of Rest Days",
      excerpt: "Understanding why rest days are crucial for your fitness progress and overall health.",
      image: "/src/assets/blog/rest-day.jpg",
      date: "March 10, 2024",
      category: "Health"
    },
    {
      id: 4,
      title: "How to Stay Motivated",
      excerpt: "Practical tips and strategies to maintain your motivation throughout your fitness journey.",
      image: "/src/assets/blog/motivation.jpeg",
      date: "March 8, 2024",
      category: "Mindset"
    }
  ];

  return (
    <div className="bg-[#121212] min-h-screen">
      <Section className="text-white py-16 px-6 md:px-12 lg:px-24">
        <h1 
          data-aos="fade-down"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        >
          Fitness <span className="text-[#FF0000]">Blog</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FF0000] text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-gray-400 text-sm mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-3 text-white hover:text-[#FF0000] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-[#FF0000] font-semibold hover:text-white transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF0000] transition-colors duration-300">
            &lt;
          </button>
          <button className="w-10 h-10 rounded-full bg-[#FF0000] text-white">1</button>
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF0000] transition-colors duration-300">2</button>
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF0000] transition-colors duration-300">3</button>
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF0000] transition-colors duration-300">4</button>
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF0000] transition-colors duration-300">5</button>
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF0000] transition-colors duration-300">
            &gt;
          </button>
        </div>

        {/* Newsletter Section */}
        <div 
          data-aos="fade-up"
          className="mt-16 bg-[#1a1a1a] rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6">
            Get the latest fitness tips and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 focus:border-[#FF0000] outline-none"
            />
            <button className="px-6 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog; 