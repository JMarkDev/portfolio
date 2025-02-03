import { useState } from "react";
import profileImg from "./assets/profile.png";
import Navbar from "./components/Navbar";
import webDesignImg from "./assets/web design.png";
import webDevelopmentImg from "./assets/web development.png";
import appDevelopmentImg from "./assets/app dev.png";
import { skills } from "./constants/Skills";
import { projects } from "./constants/Projects";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import SocialmediaLinks from "./components/SocialMedia/SocialMedia";
import { gameApps } from "./constants/GameApp";
import Modal from "./components/Modal";
import { AiOutlineGlobal } from "react-icons/ai";
import WebAppModal from "./components/WebAppModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLink, setOpenLink] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedWebApp, setSelectedWebApp] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    setOpenLink(id);

    if (section) {
      let offset = 0;

      if (window.innerWidth < 768) {
        offset = 80;
      }
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openLink={openLink}
      />
      <div
        id="home"
        style={{ minHeight: "calc(100vh - 60px)" }}
        className="flex h-screen xl:p-20  p-6 gap-5  lg:flex-row flex-col-reverse items-center justify-center  space-y-8 md:space-x-16 md:space-y-0 bg-white"
      >
        {/* Text Section */}
        <div className="text-left flex flex-col gap-3 ">
          <h2 className="text-xl w-fit md:text-2xl font-extrabold text-slate-800">
            Hello, I&apos;m{" "}
            <span className="typed-text text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Josiel Mark
            </span>
          </h2>

          <h1 className="text-3xl py-2 md:text-5xl font-extrabold text-blue-600">
            Full-Stack Web Developer
          </h1>
          <p className="text-justify  md:text-lg text-gray-600 leading-relaxed mb-6">
            I&apos;m a developer with a passion for building beautiful and
            functional web applications. I combine clean design with efficient
            code to deliver exceptional user experiences.
          </p>

          <div className="flex gap-5">
            {/* Contact Me Button */}

            <div className="relative group">
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:bg-blue-600 relative text-nowrap px-4 py-2.5 flex items-center justify-center gap-3 md:text-lg text-sm text-blue-600 rounded-lg shadow-lg transition-all duration-300 border-blue-600 border-2 "
              >
                <span className=" transition-all duration-300 group-hover:text-white">
                  Contact Me
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                  className="fill-current  transition-all duration-300 group-hover:text-white"
                >
                  <path d="M8.216 36.338L26.885 32.604C28.552 32.271 28.552 31.729 26.885 31.396L8.216 27.662C7.104 27.44 6.021 26.356 5.799 25.245L2.065 6.576C1.731 4.908 2.714 4.133 4.259 4.846L61.228 31.139C62.257 31.614 62.257 32.386 61.228 32.861L4.259 59.154C2.714 59.867 1.731 59.092 2.065 57.424L5.799 38.755C6.021 37.644 7.104 36.56 8.216 36.338Z"></path>
                </svg>
              </button>
            </div>

            {/* Download Resume Button */}
            <div className="relative group">
              <button className="hover:bg-blue-600 relative text-nowrap px-4 py-2.5 flex items-center justify-center gap-3 md:text-lg text-sm text-blue-600 rounded-lg shadow-lg transition-all duration-300 border-blue-600 border-2 ">
                <span className=" transition-all duration-300 group-hover:text-white">
                  Download Resume
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6  transition-all duration-300 group-hover:text-white"
                >
                  <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm7-1v4H5v-4H3v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-4h-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="w-32 sm:w-40 lg:w-80 relative">
            <img
              src={profileImg}
              alt="profile"
              className="rounded-full w-full object-cover shadow-lg hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 ">
            <SocialmediaLinks />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex  flex-col items-center justify-between  bg-white"
      >
        <div className="flex flex-col gap-12 xl:p-20  p-6 lg:flex-row items-center justify-between w-full ">
          {/* Profile Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <img
              src={profileImg}
              alt="profile"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h1 className="text-3xl font-bold text-blue-500 mt-6">
              Josiel Mark Seroy
            </h1>
            <p className="text-slate-600 mt-2 text-lg">jmseroy@gmail.com</p>
          </div>

          {/* About Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* About Heading */}
            <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl">
              About <span className="text-blue-500">Me</span>
            </h2>

            {/* About Content */}
            <p className="text-slate-600 text-justify leading-relaxed ">
              I am a results-driven Full-Stack Developer with two years of
              experience building dynamic and scalable web applications. I
              specialize in crafting intuitive, high-performance digital
              solutions tailored to user needs and project requirements. With
              expertise in both front-end and back-end technologies, I ensure
              seamless functionality, clean and efficient code, and exceptional
              user experiences. Whether collaborating in a team or working
              independently, I am committed to delivering innovative and
              impactful applications.
            </p>

            {/* Stats Section */}
            <div className="grid sm:grid-cols-2 grid-cols-1 mt-8 gap-8">
              {/* Stat Card 1 */}
              <div className="text-center rounded-lg p-6 bg-white border border-gray-200 shadow-md w-full  transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold text-blue-500">+2</h1>
                <p className="text-slate-600 mt-2">Years of Experience</p>
              </div>

              {/* Stat Card 2 */}
              <div className="text-center rounded-lg p-6 bg-white border border-gray-200 shadow-md w-full transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold text-blue-500">+10</h1>
                <p className="text-slate-600 mt-2">Projects Completed</p>
              </div>

              {/* Stat Card 3 */}
              <div className="text-center rounded-lg p-6 bg-white border border-gray-200 shadow-md w-full transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold text-blue-500">+10</h1>
                <p className="text-slate-600 mt-2">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:p-20 p-6 w-full">
          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
            My <span className="text-blue-500">Services</span>
          </h2>
          <div className=" mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
              {/* Web Design */}
              <div className="flex flex-col items-center border border-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={webDesignImg}
                    alt="Web Design"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="lg:text-xl text-lg font-bold text-slate-800">
                  Web Design
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Crafting visually stunning, intuitive, and user-friendly web
                  designs that captivate and engage audiences.
                </p>
              </div>

              {/* Web Development */}
              <div className="flex flex-col items-center border border-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={webDevelopmentImg}
                    alt="Web Development"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="lg:text-xl text-lg font-bold text-slate-800">
                  Web App Development
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Designing scalable, responsive, and high-performance web
                  applications that provide engaging and seamless user
                  experiences.
                </p>
              </div>

              {/* App Development */}
              <div className="flex flex-col items-center border border-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={appDevelopmentImg}
                    alt="App Development"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="lg:text-xl text-lg font-bold text-slate-800">
                  Mobile App Development
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Building intuitive, cross-platform mobile apps for iOS and
                  Android, designed to meet diverse user needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="w-full xl:p-20  p-6">
          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-full  mx-auto">
            <ul className="flex flex-wrap justify-center gap-8">
              {skills?.map((skill, index) => (
                <li
                  key={index}
                  className="w-[150px] h-[150px] sm:w-44 sm:h-44 flex flex-col items-center border border-gray-100 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-2"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-[80px] h-[80px] mb-3"
                  />
                  <span className="text-sm text-nowrap font-medium text-slate-700">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="w-full xl:p-20   p-6">
          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
            Personal <span className="text-blue-500">Projects</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-8">
              {projects?.map((project, index) => {
                return project.category === "Personal Projects" ? (
                  <div
                    onClick={() => setSelectedWebApp(project)}
                    key={index}
                    className="flex flex-col max-w-[400px] w-full bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                  >
                    {/* Image Section */}
                    <div className="w-full h-52 mb-4">
                      <img
                        src={
                          Array.isArray(project.image)
                            ? project.image[0]
                            : project.image
                        }
                        alt={project.name}
                        className="w-full h-full sm:object-contain md:object-cover rounded-lg"
                      />
                    </div>
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-slate-800 truncate">
                      {project.name}
                    </h2>

                    {/* Description with Ellipsis */}
                    <p className="text-slate-600 mt-2 line-clamp-4">
                      {project.description}
                    </p>

                    {/* View Project Button */}
                    <div className=" flex justify-between">
                      {project.link && (
                        <div className="mt-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                          >
                            <AiOutlineGlobal />
                            Live Demo
                          </a>
                        </div>
                      )}

                      {/* GitHub Link */}
                      {project.github && (
                        <div className="mt-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2a10 10 0 00-3.162 19.497c.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.337c.85.004 1.707.115 2.5.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.372.201 2.387.098 2.64.64.699 1.029 1.592 1.029 2.683 0 3.837-2.34 4.683-4.567 4.93.359.309.678.92.678 1.854 0 1.338-.012 2.415-.012 2.743 0 .268.18.576.688.48A10.001 10.001 0 0012 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            View on GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl my-10 text-center">
            Freelance <span className="text-blue-500">Projects</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-8">
              {projects?.map((project, index) => {
                return project.category === "Freelance Projects" ? (
                  <div
                    key={index}
                    onClick={() => setSelectedWebApp(project)}
                    className="flex flex-col max-w-[400px] w-full bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                  >
                    {/* Image Section */}
                    <div className="w-full h-52 mb-4">
                      <img
                        src={
                          Array.isArray(project.image)
                            ? project.image[0]
                            : project.image
                        }
                        alt={project.name}
                        className="w-full h-full sm:object-contain md:object-cover rounded-lg"
                      />
                    </div>
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-slate-800 truncate">
                      {project.name}
                    </h2>

                    {/* Description with Ellipsis */}
                    <p className="text-slate-600 mt-2 line-clamp-4">
                      {project.description}
                    </p>

                    {/* View Project Button */}
                    <div className=" flex justify-between">
                      {project.link && (
                        <div className="mt-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                          >
                            <AiOutlineGlobal />
                            Live Demo
                          </a>
                        </div>
                      )}

                      {/* GitHub Link */}
                      {project.github && (
                        <div className="mt-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2a10 10 0 00-3.162 19.497c.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.337c.85.004 1.707.115 2.5.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.372.201 2.387.098 2.64.64.699 1.029 1.592 1.029 2.683 0 3.837-2.34 4.683-4.567 4.93.359.309.678.92.678 1.854 0 1.338-.012 2.415-.012 2.743 0 .268.18.576.688.48A10.001 10.001 0 0012 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            View on GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null;
              })}

              {selectedWebApp && (
                <WebAppModal
                  selectedWebApp={selectedWebApp}
                  setSelectedWebApp={setSelectedWebApp}
                />
              )}

              {gameApps?.map((project, index) => (
                <div
                  onClick={() => setSelectedProject(project)}
                  key={index}
                  className="flex cursor-pointer flex-col max-w-[400px] w-full bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Video Preview with Play Icon Overlay */}
                  <div className="w-full h-52 mb-4 flex justify-center relative rounded-lg overflow-hidden group">
                    <video
                      src={project.video}
                      alt={project.name}
                      className="h-full w-auto sm:object-contain md:object-contain rounded-lg cursor-pointer transition-all duration-300 group-hover:brightness-75"
                      controls
                      muted
                      onClick={(e) => e.target.requestFullscreen()}
                    />

                    {/* Play Icon (Shows on Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4 rounded-full">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-slate-800 truncate">
                    {project.name}
                  </h2>

                  {/* Description with Ellipsis */}
                  <p className="text-slate-600 mt-2 line-clamp-4">
                    {project.description}
                  </p>

                  {/* GitHub Link */}
                  {project.github && (
                    <div className="mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2a10 10 0 00-3.162 19.497c.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.337c.85.004 1.707.115 2.5.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.372.201 2.387.098 2.64.64.699 1.029 1.592 1.029 2.683 0 3.837-2.34 4.683-4.567 4.93.359.309.678.92.678 1.854 0 1.338-.012 2.415-.012 2.743 0 .268.18.576.688.48A10.001 10.001 0 0012 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {selectedProject && (
                <Modal
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              )}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="w-full xl:p-20 bg-white p-6 ">
          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <div className="w-full flex md:flex-row flex-col-reverse justify-between gap-10">
            {/* Contact Info */}
            <div className="flex  flex-col md:w-1/2 w-full space-y-6 ">
              <h4 className="text-2xl font-bold text-slate-800">
                Contact Info
              </h4>

              <p className="text-slate-600 text-justify">
                I&apos;m currently open to new opportunities and collaborations.
                If you&apos;d like to work together or have any questions, feel
                free to reach out to me using the contact form below.
              </p>

              <p className="flex items-center gap-3">
                <MdEmail className="text-blue-600 text-lg" />
                <span className="text-blue-600">jmseroy@gmail.com</span>
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-blue-600 text-lg" />
                <span className="text-blue-600">+639757718249</span>
              </p>

              <p className="flex items-center gap-3">
                <FaLocationArrow className="text-blue-600 text-lg" />
                <span className="text-blue-600">
                  Pagadian City, Zamboanga del Sur, Philippines
                </span>
              </p>

              <div className="flex flex-start space-x-6 mt-6">
                <SocialmediaLinks />
              </div>
            </div>

            <div className="md:w-1/2 w-full ">
              <h4 className="text-2xl mb-6 font-bold text-slate-800">
                Contact Form
              </h4>
              <div className="max-w-4xl mx-auto">
                <form className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <textarea
                      rows={4}
                      placeholder="Send message here..."
                      className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                    />
                  </div>
                  <button className="w-fit px-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full p-4 text-center">
          <p className="text-slate-600">
            &copy; 2025 Josiel Mark. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
