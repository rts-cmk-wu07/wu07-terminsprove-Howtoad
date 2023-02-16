import { HiBars3BottomRight } from "react-icons/hi2";
import { IoTriangle, IoClose } from "react-icons/io5";
import { useState } from "react";
import Login from "./Login";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
const MobileNav = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="flex items-center">
        <div
          className="cursor-pointer pt-10"
          onClick={() => window.history.back()}
        >
          <IoTriangle className="text-slight-grey" size={30} />
        </div>
        <div className="flex-1 text-center text-gray-700 text-[28px]">
          {children}
        </div>
        <div className="cursor-pointer pt-10 " onClick={toggleMenu}>
          <HiBars3BottomRight
            className="text-slight-grey font-bold"
            size={30}
            strokeWidth={1}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-white z-30">
          <div className="relative">
            <div
              className="cursor-pointer absolute top-0 right-0 pt-10 pr-6"
              onClick={toggleMenu}
            >
              <IoClose className="text-slight-grey " size={30} />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className=" text-[28px] mb-8 mt-32">Home</div>
              <Link to={`/search`}>
                <div className=" text-[28px] mb-8">Search</div>
              </Link>
              <Link to={`/schedule`}>
                <div className=" text-[28px] mb-8">My Schedule</div>
              </Link>

              {user ? (
                <Logout />
              ) : (
                <div
                  className=" text-[28px] mb-8"
                  onClick={() => setIsOpen(true)}
                >
                  Log in
                </div>
              )}
            </div>
          </div>
          <Login isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default MobileNav;
