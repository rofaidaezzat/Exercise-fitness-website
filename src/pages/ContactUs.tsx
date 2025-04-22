const ContactUs = () => {
  return (
    <div className="bg-[#121212] w-full min-h-screen pt-24 lg:pt-28">

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10">

        {/*Contact Info Section*/}
        <div className="lg:col-start-1 lg:col-end-3 h-full pb-24 bg-[#EBE1E1] flex flex-col items-center justify-center border-r-black rounded-3xl p-5">
          <img src="src/assets/contact/contact.png" alt="contact" />
          <h2 className="text-2xl font-bold">CONTACT US</h2>
          <p className="text-center text-black mt-3">Welcome to our fitness hub! Whether you're a beginner or a pro, our site helps you train every muscle group effectively. Browse guided exercises, learn proper form, and start reaching your fitness goals today!</p>

          <div className="flex flex-row w-full self-start gap-3 mt-20 lg:ml-5">
            <img src="src/assets/contact/whatsicon.png" alt="" className="w-6 h-6" />
            <p className="font-semibold">+20 111 222 3333</p>
          </div>

          <div className="flex flex-row w-full self-start gap-3 mt-3 lg:ml-5 text-wrap">
            <img src="src/assets/contact/callicon.png" alt="" className="w-6 h-6" />
            <p className="font-semibold">info.fitnessexercise@gmail.com</p>
          </div>

          <div className="flex flex-row w-full self-start gap-3 mt-3 lg:ml-5">
            <img src="src/assets/contact/locationicon.png" alt="" className="w-6 h-6" />
            <p className="font-semibold">Alexandria, Egypt</p>
          </div>
        </div>

        {/*Contact Form Section*/}
        <div className="lg:col-span-4 lg:col-end-7 w-full bg-gradient-to-r from-[#2C2C2C] to-[#FF0000] rounded-3xl">
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

    </div>
  );
};

export default ContactUs;
