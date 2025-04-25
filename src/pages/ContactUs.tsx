const ContactUs = () => {
  return (
    <div className="bg-[#121212] w-full min-h-screen pt-24 lg:pt-24">
      <h3 className="font-bold text-3xl text-white flex justify-center items-center mb-5">
        Talk to us about anything you want to tell us.
      </h3>
      <div className="container mx-auto h-[600px] flex lg:grid-cols-6 gap-10 bg-gradient-to-r from-[#2C2C2C] to-[#FF0000] rounded-3xl overflow-hidden">

        {/*Contact Info Section*/}
        <div className="lg:col-start-1 lg:col-end-3 h-full pb-24 w-[40%] bg-[#EBE1E1] flex flex-col items-center justify-center border-r-black rounded-3xl p-5">
          <img src="src/assets/contact/contact.png" alt="contact" />
          <h2 className="text-2xl font-bold">CONTACT US</h2>
          <p className="text-center text-black mt-3">
            Welcome to our fitness hub! Whether you're a beginner or a pro, our
            site helps you train every muscle group effectively. Browse guided
            exercises, learn proper form, and start reaching your fitness goals
            today!
          </p>

          <div className="flex flex-row w-full self-start gap-3 mt-20 lg:ml-5">
            <img
              src="src/assets/contact/whatsicon.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="font-semibold">+20 111 222 3333</p>
          </div>

          <div className="flex flex-row w-full self-start gap-3 mt-3 lg:ml-5 text-wrap">
            <img
              src="src/assets/contact/callicon.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="font-semibold">info.fitnessexercise@gmail.com</p>
          </div>

          <div className="flex flex-row w-full self-start gap-3 mt-3 lg:ml-5">
            <img
              src="src/assets/contact/locationicon.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="font-semibold">Alexandria, Egypt</p>
          </div>
        </div>

        {/*Contact Form Section*/}
        <div className="lg:col-span-4 lg:col-end-7 w-full  rounded-3xl">
          <form>
            <div className="flex gap-20 mb-4 px-10 mt-8">
              {/* First Name */}
              <div className="w-1/2">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="FIRST NAME"
                  className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
                />
              </div>

              {/* Last Name */}
              <div className="w-1/2">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="LAST NAME"
                  className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
                />
              </div>
            </div>

            <div className="w-full px-10 mt-8">
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                placeholder="PHONE NUMBER"
                className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
              />
            </div>

            <div className="w-full px-10 mt-8">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
              />
            </div>

            <div className="w-full px-10 mt-8">
              <textarea
                id="message"
                name="message"
                rows={8}
                placeholder="MESSAGE"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder:font-bold"
              ></textarea>
            </div>

            <div className="flex justify-end px-10 mt-5">
              <button
                type="submit"
                className="bg-[#121212] text-white font-semibold py-2 rounded-2xl hover:bg-gray-800 transition duration-500 px-16"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto w-full mt-10 rounded-xl border-4 border-red-800 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.7769743560243!2d29.953209025316617!3d31.226907761583934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4eb818bb859%3A0xe4b28ff2fa922b23!2sSkills%20Dynamix!5e0!3m2!1sar!2seg!4v1745428493767!5m2!1sar!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
