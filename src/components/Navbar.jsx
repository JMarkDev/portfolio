import propTypes from "prop-types";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaCode,
  // FaPinterest,
} from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const Navbar = ({ scrollToSection, isMenuOpen, setIsMenuOpen, openLink }) => {
  return (
    <div className="bg-white p-4 fixed top-0 left-0 w-full h-[60px] z-10 lg:px-20 px-5 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div
        onClick={() => scrollToSection("home")}
        className="text-blue-700 font-extrabold text-3xl hover:scale-110 transition-transform cursor-pointer flex items-center space-x-2"
      >
        {" "}
        <FaCode className="text-3xl" />
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
          JMark
        </span>
        <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
          Dev
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden text-slate-700 hover:text-blue-500 transition-all"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute gap-6 top-[60px] shadow-lg md:shadow-none border md:border-none left-0 p-4 md:p-0 w-full md:static md:flex md:w-auto md:space-x-6 items-center justify-center flex-col md:flex-row bg-gray-100 md:bg-white rounded-lg md:rounded-none transition-all duration-300 ease-in-out
  ${isMenuOpen ? "flex" : "hidden md:flex"}`}
      >
        <li
          className={`${
            openLink === "home"
              ? "text-blue-500 group text-center w-fit"
              : "text-slate-700"
          }  hover:text-blue-500  relative group cursor-pointer`}
          onClick={() => scrollToSection("home")}
        >
          Home
          <span
            className={`${
              openLink === "home" ? "w-full" : "w-0"
            } block absolute bottom-[-2px] left-0 h-1 bg-blue-500 transition-all`}
          ></span>
        </li>

        <li
          className={`${
            openLink === "about" ? "text-blue-500 group" : "text-slate-700"
          }  hover:text-blue-500  relative group cursor-pointer`}
          onClick={() => scrollToSection("about")}
        >
          About
          <span
            className={`${
              openLink === "about" ? "w-full" : "w-0"
            } block absolute bottom-[-2px] left-0 h-1 bg-blue-500 transition-all`}
          ></span>
        </li>

        <li
          className={`${
            openLink === "skills" ? "text-blue-500 group" : "text-slate-700"
          }  hover:text-blue-500  relative group cursor-pointer`}
          onClick={() => scrollToSection("skills")}
        >
          Skills
          <span
            className={`${
              openLink === "skills" ? "w-full" : "w-0"
            } block absolute bottom-[-2px] left-0 h-1 bg-blue-500 transition-all`}
          ></span>
        </li>

        <li
          className={`${
            openLink === "projects" ? "text-blue-500 group" : "text-slate-700"
          }  hover:text-blue-500  relative group cursor-pointer`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
          <span
            className={`${
              openLink === "projects" ? "w-full" : "w-0"
            } block absolute bottom-[-2px] left-0 h-1 bg-blue-500 transition-all`}
          ></span>
        </li>

        <li
          className={`${
            openLink === "contact" ? "text-blue-500 group" : "text-slate-700"
          }  hover:text-blue-500  relative group cursor-pointer`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
          <span
            className={`${
              openLink === "contact" ? "w-full" : "w-0"
            } block absolute bottom-[-2px] left-0 h-1 bg-blue-500 transition-all`}
          ></span>
        </li>

        <li
          className={`${
            openLink === "social_media"
              ? "text-blue-500 group"
              : "text-slate-700"
          }  hover:text-blue-500  relative group cursor-pointer md:hidden block`}
          onClick={() => scrollToSection("contact")}
        >
          <div className="flex gap-3 space-x-3 text-2xl text-gray-800">
            <a
              href="https://www.linkedin.com/in/josiel-mark-seroy-0a9341245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/people/Josiel-Mark-Miel-Seroy/pfbid04hZEiTAxwsKgHqAZUgw97v1k24Vu2aEVKccugJx4NkcsY8tP3TGzb7mZ9KpZ49r7l/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="
             https://github.com/JMarkDev "
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://dribbble.com/JMarkDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaDribbble className="text-2xl" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  scrollToSection: propTypes.func,
  isMenuOpen: propTypes.bool,
  setIsMenuOpen: propTypes.func,
  openLink: propTypes.string,
};

export default Navbar;
