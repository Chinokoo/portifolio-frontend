import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex justify-center overflow-hidden">
      <div className="bg-[#F5F5F0] mt-5 w-full  h-max md:w-xl md:rounded-md shadow-xl ">
        <div className="py-5">
          <h1 className="font-bold text-2xl text-center">Register</h1>
          <p className="font-medium text-lg italic text-center text-gray-500">
            Only Peter Chinoko can create a new account.
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-2 px-3" action="">
            <label className="text-md font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 shadow-md border-gray-400 bg-white rounded-md p-2"
              type="text"
              name="name"
              placeholder=""
            />
            <label className="text-md font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 shadow-md border-gray-400 bg-white rounded-md p-2"
              type="text"
              name="email"
              placeholder=""
            />
            <label className="text-md font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 shadow-md border-gray-400 bg-white rounded-md p-2"
              type="password"
              name="password"
              placeholder=""
            />
            <label className="text-md font-medium" htmlFor="password">
              Confirm your Password
            </label>
            <input
              className="border-2 shadow-md border-gray-400 bg-white rounded-md p-2"
              type="password"
              name="password"
              placeholder=""
            />

            <button className="w-full py-2 bg-black hover:bg-gray-700 my-5 text-white rounded-md">
              Login
            </button>
            <div className="flex gap-2 pb-2">
              <p className="text-gray-500">create a new user account</p>
              <Link className="font-medium hover:underline" to={"/login"}>
                here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
