const ForgotPass = () => {
    return (
      <div className="bg-[url('src/assets/authentication/signup.jpg')] bg-cover bg-center w-full h-screen flex justify-center items-center">
        <div className="w-[400px] h-[400px] rounded-xl p-8 text-gray-100 bg-[#D9D9D94D]">
          <p className="text-center text-2xl font-bold mb-6">Forgot Password</p>
          <form className="mt-4">
            <div className="text-sm leading-5">
              <label htmlFor="email" className="block text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md border border-black outline-none px-4 py-3 text-gray-100 bg-transparent placeholder:text-gray-400 focus:bg-transparent focus:border-black"
                placeholder="example@email.com"
              />
              <div className="flex justify-end text-xs text-gray-400 mt-2 mb-3">
                <a
                  rel="noopener noreferrer"
                  href="/ResetPass"
                  className="text-gray-100 hover:underline hover:underline-offset-2 hover:decoration-purple-300 text-[14px]"
                >
                  Reset Password
                </a>
              </div>
            </div>
  
            <div className="mx-auto flex justify-center mt-5">
              <button className="bg-red-600 text-white w-[150px] h-[40px] rounded-full font-semibold flex items-center justify-center">
                Send Link
              </button>
            </div>
          </form>
  
          <p className="text-center text-xs text-gray-400 mt-6">
            Remembered your password?{" "}
            <a
              rel="noopener noreferrer"
              href="/login"
              className="text-[#F01111] font-semibold hover:underline hover:underline-offset-2 hover:decoration-purple-300"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default ForgotPass;
  