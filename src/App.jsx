import profileImg from "./assets/profile.png";
import Navbar from "./components/Navbar";
import expressJsImg from "./assets/express js.png";
import bootstrapImg from "./assets/bootstrap.png";
import javaImg from "./assets/java.png";
import html from "./assets/htmlLogo.png";
import css from "./assets/cssLogo.png";
import js from "./assets/javascriptLogo.png";
import react from "./assets/reactjsLogo.png";
import tailwind from "./assets/tailwindLogo.png";
import redux from "./assets/redux.png";
import node from "./assets/nodejsLogo.png";
import git from "./assets/gitLogo.png";
import mysql from "./assets/mysqlLogo.png";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import webDesignImg from "./assets/web design.png";
import webDevelopmentImg from "./assets/web development.png";
import appDevelopmentImg from "./assets/app dev.png";
import socketImg from "./assets/socket.io.png";
import dialogflowImg from "./assets/dialogflow.png";

function App() {
  const skills = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "Bootstrap",
      icon: bootstrapImg,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: node,
    },
    {
      name: "Express JS",
      icon: expressJsImg,
    },
    {
      name: "Git Source Control",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },

    {
      name: "Socket.IO",
      icon: socketImg,
    },
    {
      name: "Dialogflow",
      icon: dialogflowImg,
    },
    {
      name: "Java",
      icon: javaImg,
    },
  ];
  return (
    <>
      <Navbar />
      <div
        style={{ height: "calc(100vh - 56px)" }}
        className="flex  flex-col-reverse items-center justify-center  space-y-8 md:flex-row md:space-x-16 md:space-y-0 px-6 bg-gradient-to-b from-slate-100 to-blue-100"
      >
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Josiel Mark
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I&apos;m a{" "}
            <span className="font-bold text-blue-500">
              Full-Stack Web Developer
            </span>{" "}
            with a passion for building beautiful and functional web
            applications. I combine clean design with efficient code to deliver
            exceptional user experiences.
          </p>

          <div className="flex gap-5">
            {/* Contact Me Button */}
            <button className="mt-6 px-8 py-3 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-2xl transition-all">
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 64 64"
                id="send"
                className="fill-current"
              >
                <path d="M8.216 36.338L26.885 32.604C28.552 32.271 28.552 31.729 26.885 31.396L8.216 27.662C7.104 27.44 6.021 26.356 5.799 25.245L2.065 6.576C1.731 4.908 2.714 4.133 4.259 4.846L61.228 31.139C62.257 31.614 62.257 32.386 61.228 32.861L4.259 59.154C2.714 59.867 1.731 59.092 2.065 57.424L5.799 38.755C6.021 37.644 7.104 36.56 8.216 36.338Z"></path>
              </svg>
            </button>

            {/* Download CV Button */}
            <button className="mt-6 px-8 py-3 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 hover:shadow-2xl transition-all">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm7-1v4H5v-4H3v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-4h-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className=" relative">
            <img
              src={profileImg}
              alt="profile"
              className="rounded-full w-80 object-cover shadow-lg hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/josiel-mark-oliveros-7b0b3b1b4/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/josielmark.oliveros/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaFacebookSquare className="text-4xl" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
      {/* About Section */}
      {/* About Section */}
      <div className="flex flex-col items-center justify-between  px-5 py-12 bg-gradient-to-b from-blue-100 to-slate-100">
        {/* Profile and Text Section */}
        <div className="p-20 px-5 text-center md:text-left w-full space-y-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              About Me
            </h2>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m a freelance{" "}
              <span className="font-bold text-blue-500">
                Full-Stack Developer
              </span>{" "}
              with a passion for crafting dynamic and impactful web
              applications. My goal is to transform ideas into functional and
              visually appealing digital solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With expertise in both frontend and backend development, I
              specialize in building clean, efficient, and scalable applications
              that solve real-world problems. I prioritize user experience,
              maintainability, and performance in every project I undertake.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether it&apos;s creating a responsive interface, designing
              robust backend systems, or optimizing workflows, I bring
              creativity, logic, and precision to every line of code.
            </p>
          </div>
        </div>
        <div className="p-20 w-full px-5">
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10">
            My Services
          </h1>
          <div className="lg:px-20 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
              {/* Web Design */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={webDesignImg}
                    alt="Web Design"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Web Design</h2>
                <p className="text-center text-slate-600 mt-2">
                  Crafting visually stunning and user-friendly designs for your
                  website.
                </p>
              </div>

              {/* Web Development */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={webDevelopmentImg}
                    alt="Web Development"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Web App Development
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Building scalable, responsive, and high-performing websites.
                </p>
              </div>

              {/* App Development */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={appDevelopmentImg}
                    alt="App Development"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Mobile App Development
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Developing intuitive and functional mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full md:p-20 px-5">
          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            My Skills
          </h3>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8  justify-items-center">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="w-44   flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-2"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-[80px] h-[80px] mb-3"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
