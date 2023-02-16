import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import * as Yup from "yup";
const Login = ({ isOpen, setIsOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { setUser } = useContext(UserContext);

  const loginValidation = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginValidation.validate({ username, password });
      const response = await axios.post("http://localhost:4000/auth/token", {
        username,
        password,
      });
      const { token, userId } = response.data;
      console.log(response.data);
      setUser({
        username,
        token,
        userId,
      });
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrors({
          username: error.path === "username" ? error.message : null,
          password: error.path === "password" ? error.message : null,
        });
      } else if (error.response && error.response.status === 401) {
        setErrors({
          username: "Username or password is incorrect",
          password: "Username or password is incorrect",
        });
      }
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-75"></div>
      )}
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <form
            className="bg-white p-6 rounded-lg shadow-xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-4">Log in</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`border border-gray-400 p-2 w-full ${
                  errors.username ? "border-red-500" : ""
                }`}
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <p className="text-red-500 text-xs italic mt-2">
                {errors.username}
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="text-red-500 text-xs italic mt-2">
                {errors.password}
              </p>
            </div>
            <button
              className="bg-[#F4A88E] text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded mt-4"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default Login;
