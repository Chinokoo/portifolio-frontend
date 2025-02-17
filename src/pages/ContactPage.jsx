import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Get in Touch</h1>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 mb-5">
        <h2 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-4xl">
          Contact Information
        </h2>
        <div>
          <div className="grid grid-rows-3 gap-5">
            <div className="card rounded bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Email</h3>
              <p className="text-md text-gray-500">
                <a
                  href="mailto:example@example.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  example@example.com
                </a>
              </p>
            </div>
            <div className="card rounded bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Phone</h3>
              <p className="text-md text-gray-500">+1 (555) 555-5555</p>
            </div>
            <div className="card rounded bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Social Media</h3>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/example"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.twitter.com/example"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.github.com/example"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 mb-5">
        <h2 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-4xl">
          Send a Message
        </h2>
        <div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
