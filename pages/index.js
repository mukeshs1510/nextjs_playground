import Head from "next/head";
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex bg-gray-100 flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white flex shadow-2xl rounded-2xl w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-300">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200
                rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200
                rounded-full p-3 mx-1"
                >
                  <FaLinkedin className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200
                rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-grey-400 my-3">Or use your email account</p>
              <div className="flex flex-col items-center ">
                <div
                  className="bg-gray-200 w-64 p-2
                  rounded-sm
                flex items-center mb-2"
                >
                  <FaRegEnvelope className="text-grey-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none flex-1 text-sm"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div
                  className="bg-gray-200 w-64 p-2
                  rounded-sm
                flex items-center mb-2"
                >
                  <MdLockOutline className="text-grey-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none flex-1 text-sm"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember"
                      id="rememberCheckbox"
                      className="mr-1"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot password?
                  </a>
                </div>
                <a
                  className="border-2 font-semibold text-green-500 border-green-500 rounded-full px-12 py-2 inline-block
              hover:bg-green-500 hover:text-white transition-all"
                  href="#"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-500 py-36 px-12 text-white rounded-tr-2xl rounded-br-2xl">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas.
            </p>
            <a
              className="border-2 font-semibold border-white rounded-full px-12 py-2 inline-block
              hover:bg-white hover:text-green-500 transition-all"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
