import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({type,onSubmit,user}) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/ryeRTaNf_cJ4IEC1W9CPsHSS3dV6hhEIAFNqQiWz0JU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy1kZXNr/LWNvbmNlcHQtd2l0/aC1jb3B5LXNwYWNl/XzIzLTIxNDg2MDQ5/MTkuanBnP3NlbXQ9/YWlzX2l0ZW1zX2Jv/b3N0ZWQmdz03NDA')",
      }}
    >
      <div className="relative w-full max-w-md sm:max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6  rounede-full sm:rounded-3xl"></div>
        <div className="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
          <div className="max-w-md mx-auto">
            {type ==='Login' && `Hello,${user?.username}`}
            <h1 className="text-2xl font-semibold text-center mb-4">{type}</h1>
            <form onSubmit={handlesubmit}>
              <div className="space-y-6 text-gray-800">
                {type === "Register" && (
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-600"
                      placeholder="Username"
                      onChange={handlechange}
                      required
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-700"
                    >
                      Username
                    </label>
                  </div>
                )}

                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-600"
                    placeholder="Email"
                    onChange={handlechange}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-700"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-600"
                    placeholder="Password"
                    onChange={handlechange}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-700"
                  >
                    Password
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 transition text-white font-semibold rounded-md px-4 py-2 mb-2"
                  >
                    Submit
                  </button>
                </div>

                <div className="text-center">
                  {type === "Register" ? (
                    <Link to="/login" className="text-blue-600 hover:underline">
                      Already have an account? Login
                    </Link>
                  ) : (
                    <Link
                      to="/register"
                      className="text-blue-600 hover:underline"
                    >
                      Dont have an account? Register
                    </Link>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
