import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/register.webp";
import { toast } from "sonner";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please fill the email fields", {
        duration: 500,
        closeButton: true,
      });
    } else if (name === "") {
      toast.error("Please fill the name fields", {
        duration: 500,
        closeButton: true,
      });
    } else if (password === "") {
      toast.error("Please fill the password fields", {
        duration: 500,
        closeButton: true,
      });
    } else {
      toast.success(`Login successful!`, {
        duration: 500,
        closeButton: true,
      });
      // console.log("Name:", name, "Email:", email, "Password:", password);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow-md"
        >
          <div className="flex justify-center mb-6  ">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold mb-6">Hey there! 🖐️</h2>
          <p className="text-center mb-6 ">
            Enter your user name and password to Login.
          </p>

          <div className="mb-4 ">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded border"
              placeholder="Enter Your Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      {/* right side  */}
      <div className="hidden md:block w-1/2 bg-gray-800 ">
        <div className="h-full flex flex-col items-center justify-center ">
          <img
            src={registerImage}
            alt="RegisterImage"
            className="h-187 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
