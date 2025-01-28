import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-4  h-14 md:px-20 px-5 flex justify-between items-center shadow-xl ">
        {/* Logo Section */}
        <div className="text-blue-700 font-extrabold text-3xl hover:scale-110 transition-transform cursor-pointer flex items-center space-x-2">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            JMark
          </span>
          <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
            Dev
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-slate-700 hover:text-blue-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full  md:static gap-5 md:flex md:w-auto md:space-x-6 md:items-center md:justify-center`}
        >
          <li className="text-slate-700 hover:text-blue-500 py-2  md:py-0 relative group cursor-pointer">
            Home
            <span className="block absolute bottom-[-2px] left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
          </li>
          <li className="text-slate-700 hover:text-blue-500 py-2  md:py-0 relative group cursor-pointer">
            About
            <span className="block absolute bottom-[-2px] left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
          </li>
          <li className="text-slate-700 hover:text-blue-500 py-2  md:py-0 relative group cursor-pointer">
            Skills
            <span className="block absolute bottom-[-2px] left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
          </li>
          <li className="text-slate-700 hover:text-blue-500 py-2  md:py-0 relative group cursor-pointer">
            Projects
            <span className="block absolute bottom-[-2px] left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
          </li>
          <li className="text-slate-700 hover:text-blue-500 py-2  md:py-0 relative group cursor-pointer">
            Contact
            <span className="block absolute bottom-[-2px] left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
