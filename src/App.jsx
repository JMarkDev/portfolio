import profileImg from "./assets/profile.png";
import Navbar from "./components/Navbar";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import webDesignImg from "./assets/web design.png";
import webDevelopmentImg from "./assets/web development.png";
import appDevelopmentImg from "./assets/app dev.png";
import { skills } from "./constants/Skills";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationArrow } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{ minHeight: "calc(100vh - 56px)" }}
        className="flex md:p-20 px-5 gap-5 flex-col-reverse items-center justify-center  space-y-8 md:flex-row md:space-x-16 md:space-y-0 bg-gradient-to-b from-slate-100 to-blue-100"
      >
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-xl w-fit md:text-2xl font-extrabold text-slate-800">
            Hello, I&apos;m{" "}
            <span className="typed-text text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Josiel Mark
            </span>
          </h2>

          <h1 className="text-3xl py-2 md:text-5xl font-extrabold text-blue-600">
            Full-Stack Web Developer
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            I&apos;m a developer with a passion for building beautiful and
            functional web applications. I combine clean design with efficient
            code to deliver exceptional user experiences.
          </p>

          <div className="flex gap-5">
            {/* Contact Me Button */}
            <button className="mt-6 px-4 py-2 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-2xl transition-all">
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
            <button className="mt-6 px-4 py-2 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 hover:shadow-2xl transition-all">
              Download Resume
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
          <div className="w-80 relative">
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
        <div className="md:p-20 text-center md:text-left w-full space-y-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              About Me
            </h2>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m a{" "}
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
        <div className="md:p-20 w-full mt-10">
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
                  I create visually stunning and user-friendly web interfaces.
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
                  I build scalable, responsive, and high-performing websites.
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
                  I create cross-platform mobile applications for iOS and
                  Android.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full md:p-20 px-5 mt-10">
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

        {/* Projects Section */}
        <div className="w-full md:p-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            My Projects
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-full h-48 mb-4">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Project 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Project 1</h2>
                <p className="text-center text-slate-600 mt-2">
                  A brief description of the project goes here.
                </p>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-full h-48 mb-4">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Project 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Project 2</h2>
                <p className="text-center text-slate-600 mt-2">
                  A brief description of the project goes here.
                </p>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-full h-48 mb-4">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Project 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Project 3</h2>
                <p className="text-center text-slate-600 mt-2">
                  A brief description of the project goes here.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full md:p-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Get In Touch
          </h3>

          <div className="w-full flex md:flex-row flex-col  justify-between gap-10 ">
            <div className="flex  flex-col md:w-1/2 w-full space-y-6">
              <h4 className="text-2xl font-bold text-slate-800">
                Contact Info
              </h4>

              <p className="text-slate-600">
                I&apos;m currently open to new opportunities and collaborations.
                If you&apos;d like to work together on a project or have any
                questions, feel free to reach out to me using the contact form
                below.
              </p>

              <p className="flex items-center gap-3">
                <MdEmail className=" text-blue-600" />

                <span className=" font-bold text-blue-600  text-center">
                  jmseroy@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className=" text-blue-600" />

                <span className=" font-bold text-blue-600  text-center">
                  +639757718249
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaLocationArrow className="text-lg text-blue-600" />

                <span className=" font-bold text-blue-600  text-center">
                  Pagadian City, Zamboanga del Sur, Philippines
                </span>
              </p>

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
            <div className="md:w-1/2 w-full  bg-white p-6 rounded-lg shadow-lg">
              <div className="max-w-4xl mx-auto">
                <form className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-600  border-none focus: outline-none"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-600 border-none outline-none"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-600 border-none outline-none"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <textarea
                      rows={4}
                      placeholder="Send message here..."
                      className="p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-600 border-none outline-none"
                    />
                  </div>
                  <button className="w-fit px-4 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full bg-slate-100 text-center ">
          <p className="text-slate-600">
            &copy; 2025 Josiel Mark. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
